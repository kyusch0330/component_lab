import React, { useState } from "react";
import "./ScrollSlider.scss";

const proverbs = [
  {
    id: "001",
    title: "Proverb 1",
    content: "A good medicine tastes bitter",
    backColor: "#ae1e2e",
  },
  {
    id: "002",
    title: "Proverb 2",
    content: "No pain No gain",
    backColor: "#3eae2e",
  },
  {
    id: "003",
    title: "Proverb 3",
    content: "Haste makes waste",
    backColor: "#5e8ebe",
  },
  {
    id: "004",
    title: "Proverb 4",
    content: "A bad workman blames his tools",
    backColor: "#4ebebe",
  },
  {
    id: "005",
    title: "Proverb 5",
    content: "Even Homer sometimes nods",
    backColor: "#ae3eee",
  },
  {
    id: "006",
    title: "Proverb 6",
    content: "Every cloud has a silver lining",
    backColor: "#cede2e",
  },
  {
    id: "007",
    title: "Proverb 7",
    content: "Failure is but a stepping stone to success",
    backColor: "#ce4e4e",
  },
  {
    id: "008",
    title: "Proverb 8",
    content: "Don’t judge a book by its cover",
    backColor: "#fe9e8e",
  },
  {
    id: "009",
    title: "Proverb 9",
    content: "Practice makes perfect",
    backColor: "#9e3eae",
  },
  {
    id: "010",
    title: "Proverb 10",
    content: "Better late than never",
    backColor: "#3ece7e",
  },
];

const ScrollSlider = () => {
  const [currentTab, setCurrentTab] = useState(0);

  const moveToTab = (tabIndex: number) => {
    const scrollView = document.getElementsByClassName("sliderView")[0];
    const viewWidth = scrollView.clientWidth;
    scrollView.scrollLeft = tabIndex * viewWidth;
  };
  return (
    <div className="scrollSliderContainer">
      <div className="sliderTabs">
        {proverbs.map((proverb, index) => {
          return (
            <button
              key={proverb.id}
              className={`sliderTab${index === currentTab ? " selected" : ""}`}
              onClick={() => moveToTab(index)}
            >
              {proverb.title}
            </button>
          );
        })}
      </div>
      <div
        className="sliderView"
        onScroll={() => {
          const scrollView = document.getElementsByClassName("sliderView")[0];
          const scroll = scrollView.scrollLeft;
          const viewWidth = scrollView.clientWidth;
          // console.log(
          //   Math.floor((scroll + Math.floor(viewWidth / 2)) / viewWidth)
          // );
          setCurrentTab(
            Math.floor((scroll + Math.floor(viewWidth / 2)) / viewWidth)
          );
        }}
      >
        <div
          className="slider"
          style={{ width: `${proverbs.length * 100}%` }}
          onTouchEnd={() => moveToTab(currentTab)}
        >
          {proverbs.map((proverb) => {
            return (
              <div
                key={proverb.id}
                className="sliderCard"
                style={{ background: proverb.backColor }}
              >
                <h4>{proverb.title}</h4>
                <p>{proverb.content}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ScrollSlider;
