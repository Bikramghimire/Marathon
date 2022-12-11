import React, { useState, useEffect } from "react";
import _ from "underscore";
import InfiniteScroll from "react-infinite-scroll-component";

const Home = () => {
  const [photos, setPhotos] = useState<any>();
  const fetchInitialData = async () => {
    await fetch(`https://jsonplaceholder.typicode.com/photos?_limit=10`)
      .then((data) => data.json())
      .then((result) => {
        console.log("the data are===", result);
        setPhotos(result);
      });

    // .console.log("teh res===", res);
    // setPhotos(res);

    // const res = await fetch(
    //   `https://jsonplaceholder.typicode.com/todos?_start=${posts.length}&_limit=10`
    // );
    // const newPosts = await res.json();
    // setPosts((post) => [...post, ...newPosts]);
  };

  const getMorePost = async () => {
    const res = await fetch(
      `https://jsonplaceholder.typicode.com/photos?_start=${photos.length}&_limit=10`
    );
    const newPosts = await res.json();
    console.log("the new post =====", newPosts);
    console.log("the data ate=====", newPosts);
    setPhotos((photos: any) => [...photos, ...newPosts]);
  };
  useEffect(() => {
    fetchInitialData();
  }, []);
  console.log("the data are======", photos);
  return (
    <div>
      <InfiniteScroll
        dataLength={photos?.length * 10}
        hasMore={true}
        next={getMorePost}
        loader={<h4>Loading...</h4>}
      >
        {photos?.map((item: any) => {
          return (
            <div
              style={{
                width: "300px",
                border: "1px solid red",
                height: "100px",
              }}
            >
              {item.title}
            </div>
          );
        })}
      </InfiniteScroll>
    </div>
  );
};

export default Home;
