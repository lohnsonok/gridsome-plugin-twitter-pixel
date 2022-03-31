export default function (Vue, options, { head, isServer: disabled, router }) {
  if (process.isClient) {
    if (!options?.debug) {
      head.script.push({
        // twitter pixel innerHTML
        innerHTML: `
        !function(e,t,n,s,u,a){e.twq||(s=e.twq=function(){s.exe?s.exe.apply(s,arguments):s.queue.push(arguments);
        },s.version='1.1',s.queue=[],u=t.createElement(n),u.async=!0,u.src='//static.ads-twitter.com/uwt.js',
        a=t.getElementsByTagName(n)[0],a.parentNode.insertBefore(u,a))}(window,document,'script');
        twq('init','${options.id}');
        twq('track','PageView');
        `,
        body: true,
      });
    }
  }
}