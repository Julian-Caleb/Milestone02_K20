class Information {
    title: string;
    date: string;
    content: string;
  
    constructor(title: string, date: string, content: string) {
      this.title = title;
      this.date = date;
      this.content = content;
    }
}
  
const DUMMY_INFORMATION: Information[] = [
    new Information(
      "c",
      "August 1, 2023",
      "info c"
    ),
    new Information(
      "b",
      "August 5, 2023",
      "info b"
    ),
    new Information(
      "Lorem Ipsum Title 3",
      "August 10, 2023",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vel odio vitae orci iaculis volutpat."
    ),
    new Information(
        "Lorem Ipsum Title 1",
        "August 1, 2023",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed varius turpis in lectus faucibus tincidunt."
      ),
      new Information(
        "Lorem Ipsum Title 2",
        "August 5, 2023",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas commodo nunc ut massa tincidunt, in tristique nisi ultricies."
      ),
      new Information(
        "Lorem Ipsum Title 3",
        "August 10, 2023",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vel odio vitae orci iaculis volutpat."
      ),
      new Information(
        "Lorem Ipsum Title 1",
        "August 1, 2023",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed varius turpis in lectus faucibus tincidunt."
      ),
      new Information(
        "Lorem Ipsum Title 2",
        "August 5, 2023",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas commodo nunc ut massa tincidunt, in tristique nisi ultricies."
      ),
      new Information(
        "Lorem Ipsum Title 3",
        "August 10, 2023",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vel odio vitae orci iaculis volutpat."
      ),
      new Information(
        "Lorem Ipsum Title 3",
        "August 10, 2023",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vel odio vitae orci iaculis volutpat."
      ),
  ];
  
export { Information, DUMMY_INFORMATION };
  