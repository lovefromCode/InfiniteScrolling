import React, { useState } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import "./NormalScroll.css";

export default function NormalScroll() {
    const [items, setItems] = useState(["box", "box", "box"]);

    const fetchMoreData = () => {
        setTimeout(() => {
            console.log("fetch more data");
            setItems([...items, "box", "box", "box"]);
        }, 2000);
    }

    return (
        <div className="app">
            <InfiniteScroll
                dataLength={items.length}
                next={fetchMoreData}
                hasMore={true}
                loader={<h4>Loading...</h4>}
            >
                {
                    items.map((item, index) => {
                        return (
                            <div className="boxes" key={index}>
                                {item} {index}
                            </div>
                        )
                    })
                }
            </InfiniteScroll>
        </div>
    )
}
