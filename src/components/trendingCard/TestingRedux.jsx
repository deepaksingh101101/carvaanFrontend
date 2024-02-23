import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setSomethingTrue, setSomethingFalse, toggleSomething } from '../../store/slices/featureSlice';

export default function TestingRedux() {
    const dispatch = useDispatch();
  const isSomethingTrue = useSelector((state) => state.feature.isSomethingTrue);

  return (
    <div>
    <p>Is something true: {isSomethingTrue ? 'Yes' : 'No'}</p>
    <button onClick={() => dispatch(setSomethingTrue())}>Set True</button>
    <button onClick={() => dispatch(setSomethingFalse())}>Set False</button>
    <button onClick={() => dispatch(toggleSomething())}>Toggle</button>
  </div>
  )
}