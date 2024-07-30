import "./homeStyles.css";

export default function Home() {
  const Vagas = [
    {
      position: "Pessoa Desenvolvedora Front-End Pl - React",
      company: "Arco Educação",
      companyLogo:
        "https://media.licdn.com/dms/image/C4D0BAQHhkwjTWeARyw/company-logo_100_100/0/1630576137548/arcoeducacao_logo?e=2147483647&v=beta&t=vcXc5QBE8i5TyYhc6Lp9ezjtMJo0DixMUEOyKBVfjxI",
      location: "Brazil",
      date: "2024-07-25",
      agoTime: "",
      salary: "",
      jobUrl:
        "https://br.linkedin.com/jobs/view/pessoa-desenvolvedora-front-end-pl-react-at-arco-educa%C3%A7%C3%A3o-3931786869?position=1&pageNum=0&refId=OrDBZZRDSzfOZa5jsj8GzA%3D%3D&trackingId=qb9I78EFphrvHx%2Fz8gywcQ%3D%3D&trk=public_jobs_jserp-result_search-card",
    },
    {
      position: "Junior React Developer (Remote From Anywhere)",
      company: "Workling",
      companyLogo:
        "https://media.licdn.com/dms/image/C560BAQEznWRrO24Vzw/company-logo_100_100/0/1641945371362/workling_jobs_logo?e=2147483647&v=beta&t=lyLM2pojVcB-gbH1zxEoK7OEU-EFJiT0uPfxC88WuNA",
      location: "São Paulo, Brazil",
      date: "2024-07-24",
      agoTime: "1 day ago",
      salary: "",
      jobUrl:
        "https://br.linkedin.com/jobs/view/junior-react-developer-remote-from-anywhere-at-workling-3981812756?position=2&pageNum=0&refId=OrDBZZRDSzfOZa5jsj8GzA%3D%3D&trackingId=LR2A4HPSmbNZADt68uNIsg%3D%3D&trk=public_jobs_jserp-result_search-card",
    },
    {
      position: "Junior React Developer (Remote From Anywhere)",
      company: "Workling",
      companyLogo:
        "https://media.licdn.com/dms/image/C560BAQEznWRrO24Vzw/company-logo_100_100/0/1641945371362/workling_jobs_logo?e=2147483647&v=beta&t=lyLM2pojVcB-gbH1zxEoK7OEU-EFJiT0uPfxC88WuNA",
      location: "São Paulo, São Paulo, Brazil",
      date: "2024-07-24",
      agoTime: "1 day ago",
      salary: "",
      jobUrl:
        "https://br.linkedin.com/jobs/view/junior-react-developer-remote-from-anywhere-at-workling-3981819175?position=3&pageNum=0&refId=OrDBZZRDSzfOZa5jsj8GzA%3D%3D&trackingId=vFKJt1xZjBrX%2BVc5CZbRFA%3D%3D&trk=public_jobs_jserp-result_search-card",
    },
    {
      position: "Developer Júnior (React, Angular)",
      company: "Linx",
      companyLogo:
        "https://media.licdn.com/dms/image/C4D0BAQH8vV3lyWX0WA/company-logo_100_100/0/1630543188905/linxretail_logo?e=2147483647&v=beta&t=BYd_9iFmpzIW1wNYrh_1pY9i-S6lXLE5dhTNs2gtVOI",
      location: "Brazil",
      date: "2024-07-25",
      agoTime: "",
      salary: "",
      jobUrl:
        "https://br.linkedin.com/jobs/view/developer-j%C3%BAnior-react-angular-at-linx-3984237328?position=4&pageNum=0&refId=OrDBZZRDSzfOZa5jsj8GzA%3D%3D&trackingId=hTZA%2B%2BLnE2StxzPImH2p%2Fw%3D%3D&trk=public_jobs_jserp-result_search-card",
    },
    {
      position: "Desenvolvedor Front-end Pleno (React)",
      company: "Newfold Digital",
      companyLogo:
        "https://media.licdn.com/dms/image/C4D0BAQEP7KtPHVI03g/company-logo_100_100-alternative/0/1630519478405/newfold_logo?e=2147483647&v=beta&t=tujYy6rWf3wABzL3HlA-8HciIrYUg9QdXuTKgMwWUCQ",
      location: "Brazil",
      date: "2024-07-24",
      agoTime: "",
      salary: "",
      jobUrl:
        "https://br.linkedin.com/jobs/view/desenvolvedor-front-end-pleno-react-at-newfold-digital-3984143584?position=5&pageNum=0&refId=OrDBZZRDSzfOZa5jsj8GzA%3D%3D&trackingId=eNqcmCAuMM7v4Y1hQ%2BfEvw%3D%3D&trk=public_jobs_jserp-result_search-card",
    },
    {
      position: "Desenvolvedor(a) Full Stack",
      company: "Delinea EdTech",
      companyLogo:
        "https://media.licdn.com/dms/image/C4D0BAQHxZST5_ax8_A/company-logo_100_100/0/1638467291459/delineaead_logo?e=2147483647&v=beta&t=WAFxC4wCmsPaCSSufPCovXQXtM24D-jBbvc7vwfj_nc",
      location: "Brazil",
      date: "2024-07-24",
      agoTime: "",
      salary: "",
      jobUrl:
        "https://br.linkedin.com/jobs/view/desenvolvedor-a-full-stack-at-delinea-edtech-3983187890?position=6&pageNum=0&refId=OrDBZZRDSzfOZa5jsj8GzA%3D%3D&trackingId=p32hin1y9fFFxz2u3WHtIA%3D%3D&trk=public_jobs_jserp-result_search-card",
    },
    {
      position: "React Native Developer (Remote From Anywhere)",
      company: "Workling",
      companyLogo:
        "https://media.licdn.com/dms/image/C560BAQEznWRrO24Vzw/company-logo_100_100/0/1641945371362/workling_jobs_logo?e=2147483647&v=beta&t=lyLM2pojVcB-gbH1zxEoK7OEU-EFJiT0uPfxC88WuNA",
      location: "Brasília, Federal District, Brazil",
      date: "2024-07-24",
      agoTime: "",
      salary: "",
      jobUrl:
        "https://br.linkedin.com/jobs/view/react-native-developer-remote-from-anywhere-at-workling-3981819961?position=7&pageNum=0&refId=OrDBZZRDSzfOZa5jsj8GzA%3D%3D&trackingId=jQesCEqUjq%2FSPjXXtjeoEA%3D%3D&trk=public_jobs_jserp-result_search-card",
    },
    {
      position: "Senior Full Stack React/Node (projeto de 4 meses)",
      company: "NOUS LATAM",
      companyLogo:
        "https://media.licdn.com/dms/image/C4D0BAQFYRH7noPA56w/company-logo_100_100/0/1669136242286?e=2147483647&v=beta&t=Zd-6f-VCmLJv_Bs-E_OpgASVPfYEef2D0vpdaqFEe5Q",
      location: "Brazil",
      date: "2024-07-24",
      agoTime: "",
      salary: "",
      jobUrl:
        "https://br.linkedin.com/jobs/view/senior-full-stack-react-node-projeto-de-4-meses-at-nous-latam-3983718154?position=8&pageNum=0&refId=OrDBZZRDSzfOZa5jsj8GzA%3D%3D&trackingId=hN5T5ctN3k81YL5Hjsf4Ug%3D%3D&trk=public_jobs_jserp-result_search-card",
    },
    {
      position: "Desenvolvedor JAVA",
      company: "GS3 Tecnologia",
      companyLogo:
        "https://media.licdn.com/dms/image/D4D0BAQFt9j91hxrNZw/company-logo_100_100/0/1698337341759/gs3oficial_logo?e=2147483647&v=beta&t=2mTLLig6n-sjjOpiX8l985Zk3MX7O03fW6NbrmcqeOI",
      location: "Agudos, São Paulo, Brazil",
      date: "2024-07-25",
      agoTime: "",
      salary: "",
      jobUrl:
        "https://br.linkedin.com/jobs/view/desenvolvedor-java-at-gs3-tecnologia-3983755302?position=9&pageNum=0&refId=OrDBZZRDSzfOZa5jsj8GzA%3D%3D&trackingId=v0fgX1xYDBnDFGElwCAlRQ%3D%3D&trk=public_jobs_jserp-result_search-card",
    },
    {
      position: "Blockchain Developer",
      company: "Raion Software House",
      companyLogo:
        "https://media.licdn.com/dms/image/D4D0BAQFM9tW6LF-b5w/company-logo_100_100/0/1666799503379/raion_software_house_logo?e=2147483647&v=beta&t=CjEqu9l8MUhbv3MnQwotO5dOIpXskSoNlLw73SL-HHA",
      location: "Brazil",
      date: "2024-07-24",
      agoTime: "",
      salary: "",
      jobUrl:
        "https://br.linkedin.com/jobs/view/blockchain-developer-at-raion-software-house-3983707059?position=10&pageNum=0&refId=OrDBZZRDSzfOZa5jsj8GzA%3D%3D&trackingId=yvWaz4MEA5yhv4H0uzA7ow%3D%3D&trk=public_jobs_jserp-result_search-card",
    },
  ];
  return (
    <div className="container">
      {Vagas.map((vaga, index) => (
        <div key={index} className="job-card">
          <div className="img-container">
            <img
              src={vaga.companyLogo}
              alt={`${vaga.company} logo`}
              className="company-logo"
            />
          </div>
          <div className="job-desc">
            <h3 className="position">{vaga.position}</h3>
            <p className="company">{vaga.company}</p>
            <p className="location">{vaga.location}</p>
            <p className="date">{vaga.date}</p>
            <a
              href={vaga.jobUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="ver-mais"
            >
              Ver más
            </a>
          </div>
        </div>
      ))}
    </div>
  );
}
