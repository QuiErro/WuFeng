import React from 'react'
import ReactDOM from 'react-dom'
import axios from 'axios'
import 'font-awesome/css/font-awesome.min.css'

class Header extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        const {currentLab, labCategory, selectLabCategory} = this.props;
        let commonStyle = {margin: '0 10px', fontSize: '20px', fontWeight: 'bold', cursor: 'pointer'};
        let activeStyle = {...commonStyle, color: 'rgb(187, 46, 31)'};

        return (
            <div style={{width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                {
                    labCategory.map((item, key)=>{
                        return (
                            <div 
                              key={key} 
                              style={key === currentLab ? activeStyle : commonStyle}
                              onClick={()=>selectLabCategory(item)}
                            >
                                {item}
                            </div>
                        )
                    })
                        }
            </div>
        )
    }
}

class Content extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        const {currentContent} = this.props;
        let lightStyle = {background: 'rgba(0, 0, 0, 0.08)', borderRadius: '3px'};
        let liStyle = {margin: '10px', display: 'flex', alignItems: 'center'};

        return(
            <div style={{marginTop: '30px', width: '100%', display: 'flex', justifyContent: 'space-around', alignItems: 'center', flexWrap: 'wrap'}}>
                {
                    currentContent.length ? (
                        currentContent.map((item, key)=>{
                            return (
                                <div key={key} style={{margin: '10px 5px', padding: '20px', width: '250px', textAlign: 'center', ...lightStyle}}>
                                    <h4 style={{margin: '20px', fontSize: '35px', fontWeight: '300'}}>#{key + 1}</h4>
                                    <img style={{marginBottom: '8px', width: '150px', height: '150px', borderRadius: '3px'}} src={item.owner.avatar_url} alt="" />
                                    <h2><a style={{color: 'rgb(187, 46, 31)', fontWeight: 'bold', 'cursor': 'pointer'}}>{item.owner.login}</a></h2>
                                    <ul style={{margin: '20px 0', fontSize: '20px'}}>
                                        <li style={liStyle}>
                                            <div style={{display: 'flex', alignItems: 'center'}}>
                                                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" color="rgb(255, 191, 116)" size="22" height="22" width="22" style={{marginRight: '10px', color: 'rgb(255, 191, 116)'}}><path d="M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4z"></path></svg>
                                                <a href={item.owner.html_url} style={{color: '#000', fontWeight: '600', 'cursor': 'pointer'}}>{item.owner.login}</a>
                                            </div>
                                        </li>
                                        <li style={liStyle}>
                                            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 576 512" color="rgb(255, 215, 0)" size="22" height="22" width="22" style={{marginRight: '10px', color: 'rgb(255, 215, 0)'}}><path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path></svg>
                                            <span>{this.dealWithNumber(item.stargazers_count)}&nbsp;stars</span>
                                        </li>
                                        <li style={liStyle}>
                                            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 384 512" color="rgb(129, 195, 245)" size="22" height="22" width="22" style={{marginRight: '10px', color: 'rgb(129, 195, 245)'}}><path d="M384 144c0-44.2-35.8-80-80-80s-80 35.8-80 80c0 36.4 24.3 67.1 57.5 76.8-.6 16.1-4.2 28.5-11 36.9-15.4 19.2-49.3 22.4-85.2 25.7-28.2 2.6-57.4 5.4-81.3 16.9v-144c32.5-10.2 56-40.5 56-76.3 0-44.2-35.8-80-80-80S0 35.8 0 80c0 35.8 23.5 66.1 56 76.3v199.3C23.5 365.9 0 396.2 0 432c0 44.2 35.8 80 80 80s80-35.8 80-80c0-34-21.2-63.1-51.2-74.6 3.1-5.2 7.8-9.8 14.9-13.4 16.2-8.2 40.4-10.4 66.1-12.8 42.2-3.9 90-8.4 118.2-43.4 14-17.4 21.1-39.8 21.6-67.9 31.6-10.8 54.4-40.7 54.4-75.9zM80 64c8.8 0 16 7.2 16 16s-7.2 16-16 16-16-7.2-16-16 7.2-16 16-16zm0 384c-8.8 0-16-7.2-16-16s7.2-16 16-16 16 7.2 16 16-7.2 16-16 16zm224-320c8.8 0 16 7.2 16 16s-7.2 16-16 16-16-7.2-16-16 7.2-16 16-16z"></path></svg>
                                            <span>{this.dealWithNumber(item.forks_count)}&nbsp;forks</span>
                                        </li>
                                        <li style={liStyle}>
                                            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 576 512" color="rgb(241, 138, 147)" size="22" height="22" width="22" style={{marginRight: '10px', color: 'rgb(241, 138, 147)'}}><path d="M569.517 440.013C587.975 472.007 564.806 512 527.94 512H48.054c-36.937 0-59.999-40.055-41.577-71.987L246.423 23.985c18.467-32.009 64.72-31.951 83.154 0l239.94 416.028zM288 354c-25.405 0-46 20.595-46 46s20.595 46 46 46 46-20.595 46-46-20.595-46-46-46zm-43.673-165.346l7.418 136c.347 6.364 5.609 11.346 11.982 11.346h48.546c6.373 0 11.635-4.982 11.982-11.346l7.418-136c.375-6.874-5.098-12.654-11.982-12.654h-63.383c-6.884 0-12.356 5.78-11.981 12.654z"></path></svg>
                                            <span>{this.dealWithNumber(item.open_issues)}&nbsp;open issues</span>
                                        </li>
                                    </ul>
                                </div>
                            )
                        })
                    ) : (
                        <img style={{margin: '0 auto', width: '500px', height: '500px'}} src="https://img.zcool.cn/community/01136858d4d266a801219c7766cc7f.gif" />
                    )
                }
            </div>
        )
    }

    // 格式化数字
    dealWithNumber = (number) => {
        let num = (number || 0).toString();
        let result = '';
        while (num.length > 3) {
            result = ',' + num.slice(-3) + result;
            num = num.slice(0, num.length - 3);
        }
        if(num){ 
            result = num + result; 
        }
        return result;
    }
}

class App extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            currentLab: 0,
            labCategory: ['All', 'JavaScript', 'Ruby', 'Java', 'CSS', 'Python'],
            labContent: {},
            currentContent: []
        };
    }

    render(){
        const {currentContent, labCategory, currentLab} = this.state;

        return (
            <div style={{margin: '50px auto', width: '1200px'}}>
                <Header currentLab={currentLab} labCategory={labCategory} selectLabCategory={this.selectLabCategory}/>
                <Content  currentContent={currentContent}/>
            </div>
        );
    }

    componentDidMount(){
        this.getHotLabs();
    }

    componentWillUnmount(){
        // 卸载异步操作设置状态
        this.setState = (state, callback) => {
            return;
        }
    }

    // 选择版块
    selectLabCategory = (language) => {
        let index = this.state.labCategory.indexOf(language);
        index = index !== -1 ? index : 0;

        if(this.state.labContent[this.state.labCategory[index]] && this.state.labContent[this.state.labCategory[index]].length){
            // 若已获取，直接从this.state拿
            this.setState({
                currentLab: index,
                currentContent: this.state.labContent[this.state.labCategory[index]]
            });
        }else{
            // 若没获取，则发请求
            this.setState({
                currentLab: index,
                currentContent: []
            }, ()=>{
                let language = this.state.labCategory[this.state.currentLab];
                this.getHotLabs(language);
            });
        }
    }

    // 请求 获取热门项目
    getHotLabs = async (language) => {
        language = language || 'All';
        let apiUrl = `https://api.github.com/search/repositories?q=stars:%3E1${language ? '+language:' + language.toLowerCase() : ''}&sort=stars&order=desc&type=Repositories`;
        const res = await axios.get(apiUrl);
        if(res.status === 200){
            this.setState((state) => ({
                labContent: {...state.labContent, [language]: res.data.items},
                currentContent: res.data.items
            }));
        }
    }
}

ReactDOM.render(
    <App/>,
    document.getElementById('app')
);