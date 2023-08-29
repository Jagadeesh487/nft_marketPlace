import React, {useState} from 'react'
import IMage from 'next/image'
import { TiArrowSortedDown, TiArrowSortedUp, TiTick } from 'react-icons/ti'
import Style from './AuthorTaps.module.css'
import { ST } from 'next/dist/shared/lib/utils'

const AuthorTaps = ({
  setCollectiables,
  setCreated,
  setLike,
  setFollower,
  setFollowing
}) => {

  const [openList, setopenList] = useState(false)
  const [activeBtn, setactiveBtn] = useState(1)
  const [selectedMenu, setselectedMenu] = useState("Most Recent")
  const listArray = [
    "Created By Admin",
    "Most Appreciated",
    "Most Discussed",
    "Most Viewed",  
  ]
  
  const openDropDownList = () => {
    if(!openList){
      setopenList(true)
    }
    else{
      setopenList(false)
    }
  }

  const openTab = (e) => {
    const btnText = e.target.innerText;
    if(btnText == "Collectiables"){
      setCollectiables(true)
      setCreated(false)
      setFollower(false)
      setFollowing(false)
      setLike(false)
      setactiveBtn(1)
    }
    else if (btnText == "Created"){
      setCollectiables(false)
      setCreated(true)
      setFollower(false)
      setFollowing(false)
      setLike(false)
      setactiveBtn(2)
    }
    else if (btnText == "Like"){
      setCollectiables(false)
      setCreated(false)
      setFollower(false)
      setFollowing(false)
      setLike(true)
      setactiveBtn(3)
    }
    else if (btnText == "Follower"){
      setCollectiables(false)
      setCreated(false)
      setFollower(true)
      setFollowing(false)
      setLike(false)
      setactiveBtn(4)
    }
    else if (btnText == "Following"){
      setCollectiables(false)
      setCreated(false)
      setFollower(false)
      setFollowing(true)
      setLike(false)
      setactiveBtn(5)
    }
  }

  return (
    <div className = {Style.AuthorTaps}>
      <div className={Style.AuthorTaps_box}>
        <div className={Style.AuthorTaps_box_left}>
          <div className={Style.AuthorTaps_box_left_btn}>
            <button 
            className={`${activeBtn == 1 ? Style.active:""}`}
            onClick={(e) => openTab(e)}>Collectiables{""}</button>
            <button 
            className={`${activeBtn == 2 ? Style.active:""}`}
            onClick={(e) => openTab(e)}>Created{""}</button>
            <button 
            className={`${activeBtn == 3 ? Style.active:""}`}
            onClick={(e) => openTab(e)}>Like{""}</button>
            <button 
            className={`${activeBtn == 4 ? Style.active:""}`}
            onClick={(e) => openTab(e)}>Follower{""}</button>
            <button 
            className={`${activeBtn == 5 ? Style.active:""}`}
            onClick={(e) => openTab(e)}>Following{""}</button>
          </div>
        </div>

        <div className = {Style.AuthorTaps_box_right}>
          <div className={Style.AuthorTaps_box_right_para}
          onClick={()=>openDropDownList()}
          >
            <p>{selectedMenu}</p>
            {openList ? <TiArrowSortedUp/> : <TiArrowSortedDown/>}
          </div>
          {openList && (
            <div className = {Style.AuthorTaps_box_right_list}>
              {listArray.map((el, i) => (
                <div key={i+1} onClick={() => setselectedMenu(el)}
                className = {Style.AuthorTaps_box_right_list_item}>
                  <p>{el}</p>
                  <span>{selectedMenu == el && <TiTick/>}</span>                  
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default AuthorTaps