import React from 'react'
import styled from 'styled-components'
import { AiOutlineFileImage, AiOutlineSave } from 'react-icons/ai'
import { MdCancel } from 'react-icons/md'

function PreviewImg({ checkFile, preveiw, upload, resetImg, dft, closeit }) {

  return (
    <PrevContainer>
      <PreveiwHeader><h4 className='upload-heading'>Upload your new avatar</h4><span className='cancelbtn' onClick={closeit}><MdCancel /></span></PreveiwHeader>
      <PreveiwMain>
        <Preview src={(preveiw) ? preveiw : dft} />
        <ResetBtn onClick={resetImg}>Reset</ResetBtn>
      </PreveiwMain>
      <ChooseWrap>
        <label htmlFor='avatar_uploader'>
          <AiOutlineFileImage />
          &nbsp; Choose Avatar
        </label>
        <input accept="image/*" onChange={checkFile} id='avatar_uploader' type={'file'} />
      </ChooseWrap>
      <ActionBtnWrap>
        <SaveBtn onClick={upload}><AiOutlineSave /> Save</SaveBtn>
        <CancelBtn onClick={closeit}>Cancel</CancelBtn>
      </ActionBtnWrap>
    </PrevContainer>
  )
}

const PrevContainer = styled.div`
  height: 65vh;
  width: 90vw;
  position: relative;
  background-color: #fff;
  border: 1px solid #999;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 6px;
  box-shadow: 0 3px 9px rgb(0 0 0 / 50%);
  background-clip: padding-box;
  outline: 0;
`

const PreveiwHeader = styled.div`
  border-radius: 6px;
  background-color: #fff;
  line-height: 26px;
  padding: 15px;
  border-bottom: 1px solid #e5e5e5;
  display:flex;
  align-items: center;

  .upload-heading{
    padding-left: 10px;
    margin:0;  
  }

  .cancelbtn{
    cursor: pointer;
    margin-top: 4px;
    margin-left: auto;
    margin-right: 5px;

    &:hover{
      color: red;
    }
  }

`

const PreveiwMain = styled.div`
  padding: 40px 0 40px;
  text-align: center;
  background: rgba(0, 0, 0, 0.85);
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Preview = styled.img`
  height: 200px;
  width: 200px;
  border-radius: 13px;
  border: 5px solid white;
`
const ResetBtn = styled.div`
  margin: 0 5px;
  margin-top: 20px;
  padding: 10px;
  border: 1px white solid;
  border-radius: 5px;
  transition: all 0.3s;
  cursor: pointer;
  background: white;

  &:hover{
    color: white;
    background-color: #3c4859;
    border: #e3e2e2 1px solid;
  }
`

const ChooseWrap = styled.div`
  margin-top: 30px;
  margin-bottom: 20px;
  text-align: center;

  label{
    padding: 10px;
    border-radius: 7px;
    border: 1px solid #ddd;
    cursor: pointer;

    &:hover{
      background: #eeecec;
    }
  }

  input[type='file'] {
    display: none;
  }
`

const ActionBtnWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
`
const SaveBtn = styled.div`
  display: flex;
  align-items: center;
  padding:10px;
  border-radius: 5px;
  background: #e6e2e2;
  margin-right: 10px;
  color: #00acff;
  transition: all 0.3s;
  cursor: pointer;

  &:hover{
    background: #d8e4ec;
  }

  svg{
    margin-top: 2px;
    margin-right: 4px;
  }
`
const CancelBtn = styled.div`
  padding:10px;
  margin-right: 30px;
  border-radius: 5px;
  background: #e6e2e2;
  color: #ff2727;
  transition: all 0.3s;
  cursor: pointer;

  &:hover{
    background: #e9dddd;
  }
`

export default PreviewImg