const BoardDetail = () => {
    return (
        <>
        <div className="p-10 bg-white flex flex-col justify-evenly items-center w-[509px] h-[772px] border-[10px] border-yellow-500 rounded-[100px] ">
            <div className="flex w-full justify-between items-center">
                <h2 className="text-[64px]">Title</h2>
                <p className="text-[32px]">date</p>
            </div>
            <p className="text-justify">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus nec mi in ligula tincidunt interdum. Curabitur ut diam fermentum, ultrices ligula sit amet, dignissim libero. Morbi sit amet mauris volutpat dui ultricies feugiat. Proin elementum efficitur venenatis. Cras pellentesque massa in dolor aliquet bibendum. Sed sapien quam, fermentum non metus interdum, pretium mollis odio. Vivamus nec libero ultrices, venenatis justo in, ultricies magna.</p>    
        </div>
        </>
    ) 
}

export default BoardDetail