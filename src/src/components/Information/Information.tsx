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
    "Tugas habit",
    "July 19, 2023",
    "http://bit.ly/BentukKebiasaanBaru_"
  ),
  new Information(
    "Isi pengambilan slayer",
    "",
    "https://docs.google.com/spreadsheets/d/1Fysca7LIT18lvGVsZtfTbLWt5qmvyr3TR5GnJxc7OZk/edit#gid=815026586"
  ),
  new Information(
    "Day 3 = fun day",
    "",
    "https://docs.google.com/spreadsheets/d/1gJs24vuwL66e2dKndbojhhdj0ae_-sGUsFW8Df8mpnM/edit#gid=0"
  ),
  new Information(
    "Kenalan spartans",
    "Mentoring",
    "13 orang lagi"
  ),
  new Information(
    "Kenalan dengan warga HMIF",
    "Mentoring",
    "3 sudo dan 2 init"
  ),
  new Information(
    "Wawancara BP",
    "August 3, 2023",
    "Pilih salah satu dari list BP"
  ),
  new Information(
    "Tugas vlog with buddies",
    "August 11, 2023",
    "https://docs.google.com/document/d/1UwEIakYYYzcqMz3kAcdrRfOByYhWz1ySTz4kLRNuqQE/edit"
  ),
  new Information(
    "Hafalin mars HMIF",
    "",
    "https://www.youtube.com/watch?v=he_eJki6qpM&feature=youtu.b"
  ),
  new Information(
    "Milih kasuh",
    "",
    "di sparta22hmif.com"
  )
  ];
  
export { Information, DUMMY_INFORMATION };
  