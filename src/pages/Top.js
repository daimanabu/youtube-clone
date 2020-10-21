import React, { useEffect, useContext } from 'react'
import Layout from '../components/Layout/Layout'
import {fetchPopularData} from '../apis/index'
import { Store } from '../store/index'
import VideoGrid from '../components/VideoGrid/VideoGrid'
import VideoGriditem from '../components/VideoGriditem/VideoGriditem'

const Top = () => {
    const { globalState, setGlobalState } = useContext(Store)
    useEffect(() => {
        fetchPopularData().then((res) => {
console.log('data', res)
setGlobalState({type: 'SET_POPULAR', payload: {popular: res.data.items}})
        })
        
    }, [])
    return (
        <Layout>
            <VideoGrid>
                {
                    globalState.popular && globalState.popular.map((popular)=>{
                        return (
                            <VideoGriditem
                            id={popular.id}
                            key={popular.id}
                            src={popular.snippet.thumbnails.standard.url}
                            title={popular.snippet.title} />
                        )
                    })
                }
            </VideoGrid>
        </Layout>
    )
}
export default Top