import { NextRequest, NextResponse } from "next/server";
import axios from 'axios'
import { load } from 'cheerio'

export async function GET(req: NextRequest, { params }: { params: { user: string, repo: string } }) {
    try {
        const { user, repo } = params
        console.log(params)
        const url = `https://github.com/${user}/${repo}`
        const data = await getRepo(url)
        return NextResponse.json(data)
    } catch (error) {
        console.log(error)
        return NextResponse.json(error)
    }
}

const getRepo = async (url: string) => {
    try {
        const { data } = await axios.get(url, {
            headers: {
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/76.0.3809.100 Safari/537.36'
            }
        })
        const $ = load(data)
        const content = $("div.repository-content div.Layout-sidebar div div div")
        const desc = $(content).children("p.f4.my-3").first().text().trim()
        console.log(desc)
        if (!desc) {
            console.log("no desc", url)
        }
        const href = $(content).children("div.my-3.d-flex.flex-items-center").children("span").children("a").attr("href")
        const readme = $("div.repository-content div.Layout-main script[data-target=react-partial.embeddedData]").html()
        if (!readme) return null
        const temp = JSON.parse(readme)
        let tempHtml = temp.props.initialPayload.overview.overviewFiles[0].richText
        tempHtml = tempHtml.replace(/\n/g, "")
        const $2 = load(tempHtml)
        const readme2 = $2("article")
        const id = $(readme2).children("p").text().trim()
        const li = $(readme2).children("p").children("a")
        const img: string[] = []
        li.each((idx, el) => {
            const i = $(el).children("img").attr("data-canonical-src")
            img.push(i ? i : "")
        })
        const d = { img: img, web: href, desc: desc, id: id }
        return d

    } catch (error) {
        console.log(error)
    }
}

export const revalidate = 0;
