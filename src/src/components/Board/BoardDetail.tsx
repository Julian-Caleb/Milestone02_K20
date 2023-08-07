type BoardDetailProps = {
    title: string;
    date: string;
    content: string;
  } & React.HTMLAttributes<HTMLDivElement>;

const BoardDetail = (props: BoardDetailProps) => {
    const { className, ...rest } = props;
    return (
        <>
            <div className={"p-10 bg-white flex flex-col justify-evenly items-center w-[509px] h-[772px] border-[10px] border-yellow-500 rounded-[100px] ${className}"}
            {...rest}>
                <div className="flex w-full justify-between items-center">
                    <h2 className="text-[50px]">{props.title}</h2>
                    <p className="text-[32px]">{props.date}</p>
                </div>
                <div className='w-full h-max'>
                    <p className="text-center text-[25px]">{props.content}</p>   
                </div> 
            </div>
        </>
    ) 
}

export default BoardDetail