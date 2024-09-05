import React from 'react'

export default function Loading() {
  return (
        <div class="d-flex justify-content-center align-items-center" style={{height:'100vh'}}>
            <div class="spinner-border text-success" role="status">
                <span class="visually-hidden">Loading...</span>
            </div>
        </div>
  )
}
