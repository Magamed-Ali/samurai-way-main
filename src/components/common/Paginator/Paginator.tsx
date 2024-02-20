import s from "./Paginator.module.css"
import React, {Component} from "react";

type UsersType = {
    pages: Array<number>
    CurrentPage: (item: number) => void
    currentPage: number
}

export class Paginator extends Component<UsersType> {
    constructor(props: UsersType) {
        super(props);
    }

    render() {
        const { pages, CurrentPage, currentPage } = this.props;

            return (
                <div className={s.pagination}>
                    {pages && pages.map(item => {
                        return (
                            <span className={`${currentPage === item ? s.active : s.item}`}
                                  onClick={() => CurrentPage(item)}
                            >{item}</span>
                        )
                    }).slice(0, 10)
                    }
                    <span>....</span>
                </div>
           )
    }
}

