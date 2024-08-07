import { Iuser } from "./iuser"

export interface Ipage {
    page: number,
    per_page: number,
    total: number,
    total_pages: number,
    data: Iuser[],
    support: {
      url:string,
    text: string

  }
}
