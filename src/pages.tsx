export function Page({ index }: { index: number }) {
    if (index === 1) {
        return <div className='h-screen flex   bg-red-300'>web</div>

    }
    else if (index === 2) {
        return <div className='h-screen flex   bg-gray-300'>java</div>

    }
    else {
        return <div className='h-screen flex   bg-green-300'>script</div>
    }
}