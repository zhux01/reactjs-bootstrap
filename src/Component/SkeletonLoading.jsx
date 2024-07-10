import React from 'react'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const SkeletonLoading = () => {
  return (
    <>
    <div style={{
      margin: '3px',
      marginLeft: '12px',
      marginTop: '8px',
      marginBottom: '25px'
    }}>
    <Skeleton style={{marginBottom: '9px'}} borderRadius={7} height={30} width={240}/>
    <Skeleton width={280} count={4}/>
    <Skeleton style={{marginTop: '9px'}} borderRadius={10} height={40} width={75}/>
    </div>
    <div style={{
      margin: '3px',
      marginLeft: '12px',
      marginTop: '8px',
      marginBottom: '25px'
    }}>
    <Skeleton style={{marginBottom: '9px'}} borderRadius={7} height={30} width={240}/>
    <Skeleton width={280} count={4}/>
    <Skeleton style={{marginTop: '9px'}} borderRadius={10} height={40} width={75}/>
    </div>
    </>
  )
}

export default SkeletonLoading