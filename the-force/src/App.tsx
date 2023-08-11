import React from "react";
import logo from "./logo.png";
import NewsItem from "./NewsItem";

function App() {
  return (
    <div style={{}}>
      <header
        style={{
          backgroundColor: "#ffd100",
          // minHeight: "100vh",
          display: "flex",
          textAlign: "center",
          flexDirection: "column",
          alignItems: "center",
          fontFamily: "serif",
          fontSize: "2rem",
          color: "black",
        }}
      >
        <a style={{ cursor: "pointer" }}>
          <img
            src={logo}
            alt="logo"
            style={{
              height: "10vh",
              marginTop: "4rem",
              rotate: "2.5deg",
            }}
          />
        </a>
        <hr
          style={{
            width: "60%",
            color: "black",
            height: "0.15rem",
            borderWidth: "0",
            backgroundColor: "black",
          }}
        ></hr>
        <p>Fysiksektionens daggblad. Beroende sedan 1932.</p>
      </header>
      <NewsItem
        headline="Titel"
        tagline="Tagline"
        text=" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nibh ligula, iaculis quis tempor ut, porttitor id sem. Sed tristique blandit nulla, eu sollicitudin mauris euismod sed. Sed maximus ante in libero vestibulum placerat. Ut a congue quam. Proin sed libero et orci maximus dignissim dignissim eget ante. Vestibulum nec ligula ligula. Aliquam sit amet eleifend felis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ullamcorper urna non eros iaculis rutrum. Duis id odio vel leo tincidunt dictum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Etiam sagittis maximus faucibus. Aenean ultrices ligula eu turpis euismod, ac tristique arcu lacinia. Morbi egestas erat quis nunc blandit placerat. Praesent ipsum risus, ullamcorper ac tortor quis, fermentum mattis lectus. Nullam rutrum, ligula quis consequat fringilla, tellus arcu venenatis dolor, vitae porttitor libero eros sed nunc.
        Curabitur ac ipsum quis mauris volutpat facilisis in vitae neque. Ut congue nisl sit amet nisl auctor ullamcorper. Integer ligula massa, aliquam sit amet fermentum id, volutpat tristique lectus. Sed eget pulvinar felis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nam vitae erat id nulla egestas pulvinar eget at ex. Fusce ut odio in libero consequat pretium eu in magna. Maecenas id bibendum arcu. Quisque feugiat elit eget magna ornare convallis. "
        author="Anonym badanka, F-X Funknown"
        date="2023-07-24"
      ></NewsItem>
      <NewsItem
        headline="Titel"
        tagline="Tagline"
        text=" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nibh ligula, iaculis quis tempor ut, porttitor id sem. Sed tristique blandit nulla, eu sollicitudin mauris euismod sed. Sed maximus ante in libero vestibulum placerat. Ut a congue quam. Proin sed libero et orci maximus dignissim dignissim eget ante. Vestibulum nec ligula ligula. Aliquam sit amet eleifend felis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ullamcorper urna non eros iaculis rutrum. Duis id odio vel leo tincidunt dictum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Etiam sagittis maximus faucibus. Aenean ultrices ligula eu turpis euismod, ac tristique arcu lacinia. Morbi egestas erat quis nunc blandit placerat. Praesent ipsum risus, ullamcorper ac tortor quis, fermentum mattis lectus. Nullam rutrum, ligula quis consequat fringilla, tellus arcu venenatis dolor, vitae porttitor libero eros sed nunc.
        Curabitur ac ipsum quis mauris volutpat facilisis in vitae neque. Ut congue nisl sit amet nisl auctor ullamcorper. Integer ligula massa, aliquam sit amet fermentum id, volutpat tristique lectus. Sed eget pulvinar felis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nam vitae erat id nulla egestas pulvinar eget at ex. Fusce ut odio in libero consequat pretium eu in magna. Maecenas id bibendum arcu. Quisque feugiat elit eget magna ornare convallis. "
        author="Anonym badanka, F-X Funknown"
        date="2023-07-24"
      ></NewsItem>
      <NewsItem
        headline="Titel"
        tagline="Tagline"
        text=" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nibh ligula, iaculis quis tempor ut, porttitor id sem. Sed tristique blandit nulla, eu sollicitudin mauris euismod sed. Sed maximus ante in libero vestibulum placerat. Ut a congue quam. Proin sed libero et orci maximus dignissim dignissim eget ante. Vestibulum nec ligula ligula. Aliquam sit amet eleifend felis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ullamcorper urna non eros iaculis rutrum. Duis id odio vel leo tincidunt dictum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Etiam sagittis maximus faucibus. Aenean ultrices ligula eu turpis euismod, ac tristique arcu lacinia. Morbi egestas erat quis nunc blandit placerat. Praesent ipsum risus, ullamcorper ac tortor quis, fermentum mattis lectus. Nullam rutrum, ligula quis consequat fringilla, tellus arcu venenatis dolor, vitae porttitor libero eros sed nunc.
        Curabitur ac ipsum quis mauris volutpat facilisis in vitae neque. Ut congue nisl sit amet nisl auctor ullamcorper. Integer ligula massa, aliquam sit amet fermentum id, volutpat tristique lectus. Sed eget pulvinar felis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nam vitae erat id nulla egestas pulvinar eget at ex. Fusce ut odio in libero consequat pretium eu in magna. Maecenas id bibendum arcu. Quisque feugiat elit eget magna ornare convallis. "
        author="Anonym badanka, F-X Funknown"
        date="2023-07-24"
      ></NewsItem>
      <NewsItem
        headline="Titel"
        tagline="Tagline"
        text=" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nibh ligula, iaculis quis tempor ut, porttitor id sem. Sed tristique blandit nulla, eu sollicitudin mauris euismod sed. Sed maximus ante in libero vestibulum placerat. Ut a congue quam. Proin sed libero et orci maximus dignissim dignissim eget ante. Vestibulum nec ligula ligula. Aliquam sit amet eleifend felis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ullamcorper urna non eros iaculis rutrum. Duis id odio vel leo tincidunt dictum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Etiam sagittis maximus faucibus. Aenean ultrices ligula eu turpis euismod, ac tristique arcu lacinia. Morbi egestas erat quis nunc blandit placerat. Praesent ipsum risus, ullamcorper ac tortor quis, fermentum mattis lectus. Nullam rutrum, ligula quis consequat fringilla, tellus arcu venenatis dolor, vitae porttitor libero eros sed nunc.
        Curabitur ac ipsum quis mauris volutpat facilisis in vitae neque. Ut congue nisl sit amet nisl auctor ullamcorper. Integer ligula massa, aliquam sit amet fermentum id, volutpat tristique lectus. Sed eget pulvinar felis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nam vitae erat id nulla egestas pulvinar eget at ex. Fusce ut odio in libero consequat pretium eu in magna. Maecenas id bibendum arcu. Quisque feugiat elit eget magna ornare convallis. "
        author="Anonym badanka, F-X Funknown"
        date="2023-07-24"
      ></NewsItem>
      <NewsItem
        headline="Titel"
        tagline="Tagline"
        text=" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nibh ligula, iaculis quis tempor ut, porttitor id sem. Sed tristique blandit nulla, eu sollicitudin mauris euismod sed. Sed maximus ante in libero vestibulum placerat. Ut a congue quam. Proin sed libero et orci maximus dignissim dignissim eget ante. Vestibulum nec ligula ligula. Aliquam sit amet eleifend felis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ullamcorper urna non eros iaculis rutrum. Duis id odio vel leo tincidunt dictum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Etiam sagittis maximus faucibus. Aenean ultrices ligula eu turpis euismod, ac tristique arcu lacinia. Morbi egestas erat quis nunc blandit placerat. Praesent ipsum risus, ullamcorper ac tortor quis, fermentum mattis lectus. Nullam rutrum, ligula quis consequat fringilla, tellus arcu venenatis dolor, vitae porttitor libero eros sed nunc.
        Curabitur ac ipsum quis mauris volutpat facilisis in vitae neque. Ut congue nisl sit amet nisl auctor ullamcorper. Integer ligula massa, aliquam sit amet fermentum id, volutpat tristique lectus. Sed eget pulvinar felis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nam vitae erat id nulla egestas pulvinar eget at ex. Fusce ut odio in libero consequat pretium eu in magna. Maecenas id bibendum arcu. Quisque feugiat elit eget magna ornare convallis. "
        author="Anonym badanka, F-X Funknown"
        date="2023-07-24"
      ></NewsItem>
      <NewsItem
        headline="Titel"
        tagline="Tagline"
        text=" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nibh ligula, iaculis quis tempor ut, porttitor id sem. Sed tristique blandit nulla, eu sollicitudin mauris euismod sed. Sed maximus ante in libero vestibulum placerat. Ut a congue quam. Proin sed libero et orci maximus dignissim dignissim eget ante. Vestibulum nec ligula ligula. Aliquam sit amet eleifend felis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ullamcorper urna non eros iaculis rutrum. Duis id odio vel leo tincidunt dictum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Etiam sagittis maximus faucibus. Aenean ultrices ligula eu turpis euismod, ac tristique arcu lacinia. Morbi egestas erat quis nunc blandit placerat. Praesent ipsum risus, ullamcorper ac tortor quis, fermentum mattis lectus. Nullam rutrum, ligula quis consequat fringilla, tellus arcu venenatis dolor, vitae porttitor libero eros sed nunc.
        Curabitur ac ipsum quis mauris volutpat facilisis in vitae neque. Ut congue nisl sit amet nisl auctor ullamcorper. Integer ligula massa, aliquam sit amet fermentum id, volutpat tristique lectus. Sed eget pulvinar felis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nam vitae erat id nulla egestas pulvinar eget at ex. Fusce ut odio in libero consequat pretium eu in magna. Maecenas id bibendum arcu. Quisque feugiat elit eget magna ornare convallis. "
        author="Anonym badanka, F-X Funknown"
        date="2023-07-24"
      ></NewsItem>
    </div>
  );
}

export default App;
