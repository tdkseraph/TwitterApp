import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    StatusBar,
    TouchableOpacity,
    Image,
    ListView,
    Stylesheet,
    Linking,
    Navigation,
    RefreshControl
} from 'react-native';
import {twitterAPI} from '../api/twitterapi.js'

export default class ControlPanel extends Component{
    constructor(props){
        super(props);
        this.state={
            enable:false,
            profile:{},
            suggestions:[]
        }
    }
    
    componentWillMount () {
        this.getUserProfile();
        this.getSuggestions();
    }

    async getSuggestions(){
         let suggest = await twitterAPI.getSuggestions().then((item) => {
             var str='';
             for(let i =0;i< item.length;i++) {             
                str += '#'+item[i].slug + ' ';             
        }
            this.setState({
                suggestions:str
            })
        });
    }

    async getUserProfile(){
        let data = await twitterAPI.getAccountVerify().then((item) => {
            this.setState({
                profile:item
            })
        });     
    }

    showDate(){
        if (this.state.profile.created_at){
            var options = { day:'numeric', month:'long' ,year:'numeric'}
            var date = new Date(Date.parse(this.state.profile.created_at.replace(/(\+)/, 'UTC$1')));
        
            return date.toLocaleDateString("en-US", options)
        }   
    }
    

    render()
    {
        if (!this.state.profile)
        {
            return(<View></View>)
        }

        var date = this.showDate();
        var avatar = this.state.profile.profile_image_url_https + " ";
        avatar =  avatar.replace("_normal","").trim();

        return(
            <View style={{ width:'100%',height:'100%',backgroundColor:'white',
            borderRightColor:'#4890A8', borderRightWidth:3, borderRadius:6, shadowColor:'silver',shadowRadius:4 }}>
            <View>
                <View style={{alignItems:'center'}}>               
                     <Image resizeMode='contain' style={{marginTop:10,width:200,borderRadius:8,
                         height:200,}} source={{ uri:avatar}}/>
               </View>
                    <View style={{alignItems:'center'}}>
                        <Text style={{fontWeight:'bold', fontSize:18,color:'#4890A8'}}>{this.state.profile.name}</Text>
                        <Text style={{color:'silver', fontSize:15}}>@{this.state.profile.screen_name}</Text>
                        <Text style={{padding: 5, color:'silver', fontSize:15}}>{this.state.profile.description}</Text>
                        </View>


                    <View style={{marginLeft : 8, paddingTop: 20}}>

                    
                        <Text style={{color:'#4890A8',fontSize:30, paddingBottom:10}}><Image style={{width:30, height:30}} source={require('../resources/analytics.png')}/>   Statistics</Text>
                         <Text style={{color:'silver',fontSize:18, paddingBottom:10}}><Image style={{width:20, height:20,}} source={require('../resources/notebook.png')}/>   {this.state.profile.statuses_count} tweets</Text>
                         <Text style={{color:'silver',fontSize:18, paddingBottom:10}}><Image style={{width:20, height:20,}} source={require('../resources/followers.png')}/>   {this.state.profile.friends_count} followings</Text>
                         <Text style={{color:'silver',fontSize:18, paddingBottom:10}}><Image style={{width:20, height:20,}} source={require('../resources/hearts.png')}/>   {this.state.profile.favourites_count} likes</Text>
                        <Text style={{ color:'silver',fontSize:18, paddingBottom:10}}><Image style={{width:20, height:20,}} source={require('../resources/location.png')}/>   {this.state.profile.location}</Text>
                        <Text style={{ color:'silver',fontSize:18, paddingBottom:10}}><Image style={{width:20, height:20,}} source={require('../resources/calendar.png')}/>   Joined {date}</Text>
                    
                    <Text style={{color:'#4890A8',fontSize:30, paddingBottom:10}}><Image style={{width:30, height:30}} source={require('../resources/customer.png')}/>   #trendingnow</Text>
                        <Text style={{ color:'silver',fontSize:17}} numberOfLines={4}>{this.state.suggestions}</Text>
                    
                    </View>

                </View>
            </View>
        )
    }
}