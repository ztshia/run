interface ISiteMetadataResult {
  siteTitle: string;
  siteUrl: string;
  description: string;
  logo: string;
  navLinks: {
    name: string;
    url: string;
  }[];
}

const data: ISiteMetadataResult = {
  siteTitle: 'Running✨',
  siteUrl: 'https://fit.upstairs.cn',
  logo: 'https://moment.upstairs.cn/assets/img/logo.svg',
  description: '小夏同学的健身慢跑生活。',
  navLinks: [
    {
      name: '絮语',
      url: 'https://moment.upstairs.cn',
    },
    {
      name: '关于',
      url: 'https://about.upstairs.cn',
    },
  ],
};

export default data;
