type Props = {
    title: string;
}

const Board = (props: Props) => {
    return (
        <>
            <div className="w-[387px] h-[468px] bg-[#F7F1E5] border-[10px] border-solid border-[#E7B10A] rounded-[100px] flex items-center justify-center">
                <h2 className="font-[400] text-[64px] leading-[80.06px] text-center">{props.title}</h2>
            </div>
        </>
    )

}

export default Board