import React, { useEffect, useState } from "react";
import throttle from "lodash.throttle"
import classNames from "classnames"

const getTargets = (spies) => spies.map((id) => {
  const elem = document.querySelector(`#${id}`);
  return { id, elem: elem.getBoundingClientRect() };
});


export default function ScrollSpy(props) {
  const { items, currentClassName } = props;
  // const [spies, updateSpies] = useState([]);
  const [activeItemIndex, setActive] = useState(0)

  const DefaultLayout = () => (
    <ul className={props.className}>
      {
        items.map((item, idx) => {
          const childClass = classNames({
            [`${ props.currentClassName }`]: idx === activeItemIndex,
            [`${ props.scrolledPastClassName }`]: idx < activeItemIndex
          })
          return (
            <li key={item} className={childClass}>
              {item}
            </li>
          )
        })
      }
    </ul>
  )

  useEffect(() => {

    const setActiveThreshold = window.innerHeight/3
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 1,
      rootMargin: '-25% 0px -50% 0px',
    }

    const potential = []

    let observer = new IntersectionObserver(function(entries) {
      // const entry = entries.find(obs => {
      //   console.log(obs)
      //   // console.log(obs.boundingClientRect.bottom, obs.boundingClientRect.top)
      //   return obs.boundingClientRect.top >= 0 && obs.boundingClientRect.bottom <= window.innerHeight;
      // })
      // potential = [...entries.slice(1), ...potential]
      if(entries[0].intersectionRatio) {
        const idx = items.findIndex(elem => elem === entries[0].target.id)
        setActive(idx)
      }
    }, options);

    items.forEach(id => {
      const elem = document.querySelector(`#${id}`);
      observer.observe(elem)
    })

    return () => observer.disconnect()

  }, [items]);
  
  if(props.children) {
    if(props.children.length !== items.length) return null
    return (
      <ul className={props.className}>
        {
          props.children.map((child, idx) => {
            if(!React.isValidElement(child)) return
            const ChildTag = child.type
            const isActive = idx === activeItemIndex
            const isScrolledPast = idx < activeItemIndex

            const childClass = classNames({
              [`${ child.props.className }`]: child.props.className,
              [`${ props.currentClassName }`]: isActive,
              [`${ props.scrolledPastClassName }`]: isScrolledPast,
            })

            return (
              <ChildTag { ...child.props } className={ childClass } key={ idx }>
                { child.props.children }
              </ChildTag>
            )
          })
        }
      </ul>
    )
  }

  return <DefaultLayout />
}