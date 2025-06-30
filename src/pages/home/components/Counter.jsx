"use client"
import dynamic from 'next/dynamic';
import React from 'react'
const Counter = dynamic(() => import("../../../../components/home/counter/Counter"), { ssr: false });

export default function CounterCp() {
  return (
    <Counter />
  )
}
