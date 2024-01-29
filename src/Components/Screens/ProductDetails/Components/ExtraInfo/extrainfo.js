import { Text,View } from "react-native";
import { useDimensions } from "../../../../../Context";
import AntDesign from 'react-native-vector-icons/dist/AntDesign';
import Accordion from 'react-native-collapsible/Accordion';
import { useState } from "react";
import style from "./style";


const ExtraInfo=()=>{
    const{height,width,isPortrait}=useDimensions()
    const responsiveStyle=style(height,width,isPortrait)
    const [currentActiveSections,setActiveSection]=useState([])
    const detailsArray=[
        {
            title:'Manufacturer Details',
            content:' Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it',
        },
        {
            title:'product disclaimer',
            content:' Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it'
        },
        {   title:'features & Details ',
            content:' Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it'    
        },
    ]
    const renderHeader=(sections)=>{
        return(
            <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between'}}>
                <Text style={responsiveStyle.descriptionHead}>{sections.title}</Text>
                <AntDesign name="down" size={25} color={'#dadada'}/>
            </View>
        )

    }
    const renderContent=(sections)=>{
        return(
            <View><Text style={responsiveStyle.description}>{sections.content}</Text></View>
        )
    }
    const updateSections=(currentActiveSections)=>{
       setActiveSection(currentActiveSections)
    }

return(
    <View>
       
  <Accordion
    activeSections={currentActiveSections}
    sections={detailsArray}
    // renderSectionTitle={renderSectionTitle}
    renderHeader={renderHeader}
    renderContent={renderContent}
    onChange={updateSections}
    underlayColor={"transparent"}
    sectionContainerStyle={{paddingVertical:10,borderBottomColor:'#dadada',borderBottomWidth:1,marginLeft:10}}
    paddingVertical
  />

    </View>
)}
export default ExtraInfo; 