import React from 'react'
import './lesson_4';


const Lesson4 = () => {

  const handlePromise: any = {
    promise: null,
    resolve: null,
    reject: null,
    onSuccess: (paramName: any) => handlePromise.resolve(paramName),
    onError: (paramName: any) => handlePromise.resolve(paramName)
  }

  const CreatePromise = () => {
    return {
      ...handlePromise,
      promise: new Promise((ResolvePromise, RejectPromise) => {
        ResolvePromise()
        RejectPromise()
      }),
      resolve: ResolvePromise,
      reject: RejectPromise
    }
  }

  const ResolvePromise = (pr: any) => {
    pr.onSuccess
  }

  const RejectPromise = (pr: any) => {
    pr.onError
  }


  return (
    <div>
      <button id='btn-create-promise' onClick={CreatePromise}>Create Promise</button>
      <button id='btn-resolve-promise' onClick={ResolvePromise}>Resolve Promise</button>
      <button id='btn-reject-promise' onClick={RejectPromise}>Reject Promise</button>
    </div>
  );
}

export default Lesson4;