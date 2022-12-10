import React, { useEffect, Children, useRef } from 'react';
const style = {
  ul: {
    margin: 0,
    padding: 0,
    width: '600px',
    height: '50px',
  },
  li: {
    listStyle: 'none',
    width: '200px',
    height: '50px',
    float: 'left',
  },
  content: {
    overflow: 'auto',
    maxWidth: '600px',
    maxHeight: '50px',
    maxHeight: '60px',
    // display: "flex",
    // alignItems: "flex-start"
  },
};
function MainBody(props) {
  return (
    <div className="app-content" style={style.content} id="scroll">
      <Scroll>
        <div>
          <ul style={style.ul}>
            <li style={{ backgroundColor: 'red', ...style.li }}></li>
            <li style={{ backgroundColor: 'green', ...style.li }}></li>
            <li style={{ backgroundColor: 'blue', ...style.li }}></li>
          </ul>
        </div>
      </Scroll>
    </div>
  );
}

const Scroll = props => {
  const scroll = useRef(null);
  const scrollSource = useRef(null);
  const scrollClone = useRef(null);
  useEffect(() => {
    let timer;
    let AniTimerScroll = () => {
      timer = setTimeout(function() {
        console.log(
          ' scrollSource ： ',
          scroll,
          scroll.current.scrollTop,
          scrollClone,
          scrollSource,
        ); //
        // if (scroll.current.scrollLeft == scrollSource.current.clientWidth) {
        //     scroll.current.scrollLeft = 0;
        // } else {
        //     scroll.current.scrollLeft++;
        // }
        if (scroll.current.scrollTop == scrollSource.current.clientHeight) {
          scroll.current.scrollTop = 0;
        } else {
          scroll.current.scrollTop++;
        }
        AniTimerScroll();
      }, 20);
    };
    AniTimerScroll();
  }, []);
  return (
    <div style={style.content} ref={scroll}>
      {Children.map(props.children, child => {
        return [
          //复制一份包裹的组件
          React.cloneElement(child, {
            ref: scrollSource,
          }),
          React.cloneElement(child, {
            ref: scrollClone,
          }),
        ];
      })}
    </div>
  );
};

export default Scroll; //
