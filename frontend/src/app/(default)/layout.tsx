import Script from "next/script";

export default function Default({ children }: { children: JSX.Element }) {
  return (
    <>
      <main className="flex min-h-screen flex-col justify-between p-6 md:p-24 md:pt-6 bg-[#180622] text-[#E7D9EF] text-base leading-normal">
        {children}
        <div className="border-t border-[#252525] font-gilroy text-sm pt-8 mt-10">
          Emmanuel Joseph © {new Date().getFullYear()}
        </div>
      </main>
      <Script id={'scroll'}>
        {`window.addEventListener('scroll', function() {
  var scrollPos = window.pageYOffset || document.documentElement.scrollTop;

  var sections = document.getElementsByTagName('section');

  for (var i = 0; i < sections.length; i++) {
    var section = sections[i];
    var sectionOffset = section.offsetTop - 50; // Adjust the offset as needed
    var sectionHeight = section.offsetHeight;
    var sectionId = section.getAttribute('id');

    if (scrollPos >= sectionOffset && scrollPos < sectionOffset + sectionHeight) {
      var navLinks = document.querySelectorAll('nav a');
      for (var j = 0; j < navLinks.length; j++) {
        navLinks[j].classList.remove('nav-active');
      }
      const list = document.querySelector('nav a[href="#' + sectionId + '"]').classList
      if (list) list.add('nav-active');
    }
  }
});
`}
      </Script>
    </>
  );
}
