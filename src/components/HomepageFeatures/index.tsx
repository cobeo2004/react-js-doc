import clsx from "clsx";
import Heading from "@theme/Heading";
import styles from "./styles.module.css";

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<"svg">>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: "Tài Liệu Dễ Hiểu Về JS và React",
    Svg: require("@site/static/img/undraw_docusaurus_mountain.svg").default,
    description: (
      <>
        Tài liệu về JavaScript và React đã được biên soạn một cách dễ hiểu nhất,
        dùng để phổ cập React và JavaScript một cách nhanh gọn và dễ hiểu nhất
        (ngay cả chó cũng hiểu). Nhằm nâng cao nhận thức của mọi người về việc
        Vue và Angular đéo có tuổi so với React và JavaScript.
      </>
    ),
  },
  {
    title: "Kiến Thức Đầy Đủ Từ A tới Á",
    Svg: require("@site/static/img/undraw_docusaurus_tree.svg").default,
    description: (
      <>
        Ngoải ra, những tài liệu đã được biên soạn còn cung cấp kiến thức từ cơ
        bản tới nâng cao, giúp anh em có thể hiểu rõ hơn về cơ chế hoạt động của
        React và JavaScript. Từ làm sao để viết chương trình Hello World trong
        JavaScript và React (Kiến thức lớp mầm), cho đến việc tối ưu hóa dòng
        code để chương trình chạy mượt nhất, ở đây đều có ở{" "}
        <code>Tài Liệu</code>.
      </>
    ),
  },
  {
    title: "Được Biên Soạn và Cập Nhật Liên Tọi",
    Svg: require("@site/static/img/undraw_docusaurus_react.svg").default,
    description: (
      <>
        Ồ, bạn đang lo sợ rằng thằng chủ docs sẽ biến mất và không cập nhật tài
        liệu này ư ? Bạn sai rồi, với sứ mệnh phổ cập React và JavaScript để
        tuyên bố Vue và Angular tuổi cặc. Cò sẽ liên tục biên soạn và cập nhật
        tài liệu về JavaScript và React liên tục, nhằm đưa ra những update mới
        nhất về React và JavaScript thông qua <code>Blog Nhảm</code>{" "}
        (up-to-latest version).
      </>
    ),
  },
];

function Feature({ title, Svg, description }: FeatureItem) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
