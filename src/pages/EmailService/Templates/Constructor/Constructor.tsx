import { useRef } from 'react';

import EmailEditor, { EditorRef, EmailEditorProps } from 'react-email-editor';
import styles from "./Constructor.module.css"
import { AiOutlineArrowLeft } from "react-icons/ai";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { saveTemplate } from "store/templateSlice.ts";
import { RootState } from "store/store.ts";
const Constructor = () => {
  const { id } = useParams();
  const { templates } = useSelector((state:RootState)=>state.template)
  const dispatch = useDispatch()
  const emailEditorRef = useRef<EditorRef>(null);
  const navigate = useNavigate()
  const exportHtml = () => {
    const unlayer = emailEditorRef.current?.editor;

    unlayer?.exportHtml((data) => {
      const {  html } = data;
      console.log('exportHtml', html);
      console.log(data);
      dispatch(saveTemplate({ id:id,data:data }));
      navigate(-1)
    });
  };

  const onReady: EmailEditorProps['onReady'] = () => {
    // editor is ready
    // you can load your template here;
    // the design json can be obtained by calling
    // unlayer.loadDesign(callback) or unlayer.exportHtml(callback)
    const templateJson = templates[Number(id)]
    unlayer.loadDesign(templateJson.data);
  };


  return (
    <div>
      <div className={styles.header}>
        <AiOutlineArrowLeft
          onClick={()=>{
            navigate("/emailservice")
          }}
          style={{position:'absolute',top:'7px',left:'20px',fontSize:32, color:'#fff',cursor:'pointer'}}/>
        <div  onClick={exportHtml} className={styles.button}>Сохранить</div>
      </div>
      <div>
        <EmailEditor ref={emailEditorRef} onReady={onReady} style={{minHeight:"92vh"}}/>
      </div>
    </div>
  );
};

export default Constructor;