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
    "Day 6",
    "August 8, 2023",
    "http://bit.ly/BentukKebiasaanBaru_"
  ),
  new Information(
    "Menghapal Daemon",
    "August 8, 2023",
    "Mengetahui dan menghapal 14 Daemon"
  ),
  new Information(
    "Menghapal Identitas Angkatan",
    "August 8, 2023",
    "Mengetahui dan menghapal nama angkatan, visi dan misi angkatan, makna logo angkatan, dan yel-yel"
  ),
  new Information(
    "Kenalan buddies",
    "August 5, 2023",
    "Tambah 5 buddies"
  ),
  new Information(
    "Kenalan dengan warga HMIF",
    "August 5, 2023",
    "Tambah 13 warga"
  ),
  new Information(
    "Tugas vlog buddies",
    "August 11, 2023",
    "https://docs.google.com/document/d/1UwEIakYYYzcqMz3kAcdrRfOByYhWz1ySTz4kLRNuqQE/edit"
  ),
  new Information(
    "Menghapal mars HMIF",
    "August 5, 2023",
    "https://www.youtube.com/watch?v=he_eJki6qpM&feature=youtu.b"
  ),
  new Information(
    "Memilih kasuh",
    "August 13, 2023",
    "di sparta22hmif.com"
  )
  ];
  
export { Information, DUMMY_INFORMATION };
  