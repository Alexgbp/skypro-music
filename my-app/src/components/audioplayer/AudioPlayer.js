import styled from 'styled-components';

export const Bar = styled.div`
    visibility: ${(props) => props.$visible ? "visible" : "hidden"};
    position: absolute;
    bottom: 100px;
    left: 0;
    width: 100%;
    background: rgba(28, 28, 28, 0.5);
`
export const BarContent = styled.div`
display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
`
export const BarPlayerProgress = styled.div`
width: 100%;
height: 5px;
background: #2e2e2e;
`
export const BarPlayerBlock = styled.div`
height: 80px;
display: -webkit-box;
display: -ms-flexbox;
display: flex;
position: absolute;
z-index: 2;
-webkit-box-orient: horizontal;
-webkit-box-direction: normal;
-ms-flex-direction: row;
flex-direction: row;
-webkit-box-pack: justify;
-ms-flex-pack: justify;
justify-content: space-between;
width: 100%
`
export const BarPlayer = styled.div`
display: -webkit-box;
display: -ms-flexbox;
display: flex;
-webkit-box-orient: horizontal;
-webkit-box-direction: normal;
-ms-flex-direction: row;
flex-direction: row;
-webkit-box-align: center;
-ms-flex-align: center;
align-items: center;
-webkit-box-pack: start;
-ms-flex-pack: start;
justify-content: flex-start;
`
export const BarPlayerControl = styled.div`
display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -ms-flex-direction: row;
    flex-direction: row;
    padding: 0 27px 0 31px;
`

export const PlayerBtnPrev = styled.div`
margin-right: 23px;
padding: 5px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
`
export const PlayerBtnPrevSvg = styled.svg`
width: 15px;
height: 14px;
`
export const PlayerBtnPlay = styled.div`
margin-right: 23px;
padding: 5px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
`
export const PlayBtnPlaySvg = styled.svg`
width: 22px;
    height: 20px;
    fill: #d9d9d9;
`

export const StopBtnPlaySvg = styled.svg`
width: 22px;
    height: 20px;
    fill: #d9d9d9;
`

export const PlayerBtnNext = styled.div`
padding: 5px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
margin-right: 28px;
    fill: #a53939;
`
export const PlayerBtnNextSvg = styled.svg`
width: 15px;
height: 14px;
fill: inherit;
stroke: #d9d9d9;
`
export const PlayerBtnRepeat = styled.div`
margin-right: 24px;
padding: 5px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
`
export const PlayerBtnRepeatSvg = styled.svg`
width: 18px;
height: 12px;
fill: transparent;
stroke: ${(props) => props.$click ? "white" : "#696969"}
`
export const PlayerBtnShuffle = styled.div`
padding: 5px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
`
export const PlayerBtnShuffleSvg = styled.svg`
width: 19px;
    height: 12px;
    fill: transparent;
    stroke:  ${(prop) => prop.$visible ? "#ffff" : "#696969"};
`

export const PlayerTrackPlay = styled.div`
display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -ms-flex-direction: row;
    flex-direction: row;
`

export const TrackPlayConatin = styled.div`
padding-top: 10px;
width: auto;
display: -ms-grid;
display: grid;
-ms-grid-columns: auto 1fr;
grid-template-columns: auto 1fr;
grid-template-areas: "image author" "image album";
-webkit-box-align: center;
-ms-flex-align: center;
align-items: center;
`
export const TrackPlayImage = styled.div`
width: 51px;
height: 51px;
background-color: #313131;
display: -webkit-box;
display: -ms-flexbox;
display: flex;
-webkit-box-align: center;
-ms-flex-align: center;
align-items: center;
-webkit-box-pack: center;
-ms-flex-pack: center;
justify-content: center;
margin-right: 12px;
-ms-grid-row: 1;
-ms-grid-row-span: 2;
-ms-grid-column: 1;
grid-area: image;
`
export const TrackPlaySvg = styled.svg`
width: 18px;
height: 17px;
fill: transparent;
stroke: #4e4e4e;
`
export const TrackPlayAuthor = styled.div`
-ms-grid-row: 1;
-ms-grid-column: 2;
grid-area: author;
min-width: 49px;
`
export const TrackPlayAuthorLink = styled.a`
font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: #ffffff;
    white-space: nowrap;
`

export const TrackPlayAlbum = styled.div`
-ms-grid-row: 2;
-ms-grid-column: 2;
grid-area: album;
min-width: 49px;
`
export const TrackPlayAlbumLink = styled.a`
font-style: normal;
    font-weight: 400;
    font-size: 13px;
    line-height: 24px;
    color: #ffffff;
`

export const TrackPlayLikeDis = styled.div`
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -ms-flex-direction: row;
    flex-direction: row;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    margin-left: 26px;
`
export const TrackPlayLike = styled.div`
padding: 5px;
`
export const TrackPlayLikeSvg = styled.svg`
width: 14px;
    height: 12px;
    fill: transparent;
    stroke: #696969;
`
export const TrackPlayDisLike = styled.div`
margin-left: 28.5px;
padding: 5px;
`

export const AudioComponent = styled.audio`
visibility: hidden
`
export const TimeComponent = styled.div`
position: absolute;
right: 20px;
bottom: 113px;
color: rgb(237 233 233 / 50%);
`
  

  

  
  



  
 
  
 
  


  
  
 
  
 
  
 
  
  

  
 
  

  
  
  
 
  
  
  

 
 
  
  

  
  
  
  
  
 
  
 
  
 

  
  