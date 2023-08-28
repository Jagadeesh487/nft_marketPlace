import React, {useState} from 'react'
import Style from './UploadNFT.module.css'
import { MdOutlineHttp, MdOutlineAttachFile } from 'react-icons/md'
import { FaPercent } from 'react-icons/fa'
import { AiTwotonePropertySafety } from 'react-icons/ai'
import { TiTick } from 'react-icons/ti'
import Image from 'next/image'
// import formStyle from '../AccountPage/Form/Form.module.css'
import images from '../img'
import { Button } from '@/components/components_index'
import { DropZone } from './uploadNFTIndex'

const UplaodNFT = () => {
  const [active, setActive] = useState(0);
  const [itemName, setItemName] = useState("")
  const [website, setWebsite] = useState("")
  const [description, setDescription] = useState("")
  const [royalties, setRoyalties] = useState("")
  const [fileSize, setFileSize] = useState("")
  const [category, setCategory] = useState(0)
  
  const categoryArray = [
    {
      image: images.nft_image_1,
      category: "Sports"
    },
    {
      image: images.nft_image_2,
      category: "Arts"
    },
    {
      image: images.nft_image_3,
      category: "Music"
    },
    {
      image: images.nft_image_1,
      category: "Digital"
    },
    {
      image: images.nft_image_2,
      category: "Time"
    },
    {
      image: images.nft_image_3,
      category: "Photography"
    },
  ]
  return (
    <div className ={Style.upload}>
      <DropZone
      title = "JPG, PNG, WEBM, MAX 100MB"
      heading = "Drag & Drop File"
      subHeading = "or Browse media on yout device"
      itemName = {itemName}
      website = {website}
      description = {description}
      royalties = {royalties}
      fileSize = {fileSize}
      category = {category}
      image = {images.upload}
      />

      

    </div>
  )
}

export default UplaodNFT