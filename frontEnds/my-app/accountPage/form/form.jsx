import React from 'react'
import Style from './form.module.css'
import {HiOutlineMail} from 'react-icons/hi'
import { MdOutlineHttp, MdOutlineContentCopy } from 'react-icons/md'
import { TiSocialFacebook, TiSocialTwitter, TiSocialInstagram } from 'react-icons/ti'
import { Button } from '@/components/components_index'

const Form = () => {
  return (
    <div className = {Style.Form}>
      <div className = {Style.Form_box}>
        <form>
          <div className = {Style.Form_box_input}>
            <label htmlFor = "name">Username</label>
            <input type = "text" placeholder = "shoiab bhai"
            className = {Style.Form_box_input_userName}/> 
          </div>
          <div className = {Style.Form_box_input}>
            <label htmlFor="email">Email</label>
            <div className = {Style.Form_box_input_box}>
              <div className = {Style.Form_box_input_box_icon}>
                <HiOutlineMail/>
              </div>
              <input type = "text" placeholder = "Email*"/>
            </div>
          </div>
          <div className = {Style.Form_box_input}>
            <label htmlFor="description">Description</label>
            <textarea name = "" cols="30" rows = "6" 
            placeholder='Something about yourself in few words'/>
          </div>
          <div className = {Style.Form_box_input}>
            <label htmlFor="website">Website</label>
            <div className = {Style.Form_box_input_box}>
              <div className = {Style.Form_box_input_box_icon}>
                <MdOutlineHttp/>
              </div>
              <input type="text" placeholder='Website' />
            </div>
          </div>
          <div className = {Style.Form_box_input_social}>
            <div className = {Style.Form_box_input}>
              <label htmlFor="facebook">FaceBook</label>
              <div className = {Style.Form_box_input_box}>
                <div className = {Style.Form_box_input_box_icon}>
                  <TiSocialFacebook/>
                </div>
                <input type = "text" placeholder = "http://JagadeeshFaceBook"/>
              </div>
            </div>
            <div className = {Style.Form_box_input}>
              <label htmlFor="twitter">Twitter</label>
              <div className = {Style.Form_box_input_box}>
                <div className = {Style.Form_box_input_box_icon}>
                  <TiSocialTwitter/>
                </div>
                <input type = "text" placeholder = "http://JagadeeshTwitter"/>
              </div>
            </div>
            <div className = {Style.Form_box_input}>
              <label htmlFor="instagram">Instagram</label>
              <div className = {Style.Form_box_input_box}>
                <div className = {Style.Form_box_input_box_icon}>
                  <TiSocialFacebook/>
                </div>
                <input type = "text" placeholder = "http://JagadeeshInsta"/>
              </div>
            </div>
          </div>

          <div className = {Style.Form_box_input}>
            <label htmlFor="wallet">Wallet address</label>
            <div className={Style.Form_box_input_box}>
              <div className = {Style.Form_box_input_box_icon}>
                <MdOutlineHttp/>
              </div>
              <input type = "text" placeholder = "0xb485498534c7eb796040c7f014a76b9fc44db348f8b42cf2d5b85ffdb25c7cfe"/>              
              <div className = {Style.Form_box_input_box_icon}>
                <MdOutlineContentCopy/>
              </div>
            </div>
          </div>
          <div className = {Style.Form_box_btn}>
            <Button btnName="Upload Profile" handleClick={() => {}}
            classStyle={Style.button}/>
          </div>      
        </form>
      </div>
    </div>
  )
}

export default Form