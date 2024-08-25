
const videoSec = document.querySelector(".course-sec");

fetch(
  `https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=50&playlistId=PLm-BwkVymjcx3FiQRzNmGB8whuuslhuDu&key=AIzaSyCZxGUQsDvszJDIAKsRCwwM1HUME-bdfPg`
)
  .then((res) => res.json())
  .then((data) => {
    for (const element of data.items) {
      const ele = `      
        <div class="relative mx-auto flex flex-col max-w-[300px] overflow-hidden rounded-xl bg-white bg-clip-border text-gray-700 shadow-md border border-transparent hover:border-red-500 transform transition-transform duration-300 ease-in-out hover:scale-105">
          <a href="https://www.youtube.com/watch?v=${element.snippet.resourceId.videoId}" target="_blank" class="h-full flex flex-col">
            <div class="relative flex-grow">
              <img src="${element.snippet.thumbnails.maxres.url}" alt="yt-thumbnail" class="block h-full object-cover" />
            </div>
            <div class="p-6 flex-grow">
              <h4 class="block font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                ${element.snippet.title}
              </h4>
              <p class="block mt-3 font-sans text-xl antialiased font-normal leading-relaxed text-gray-700">
              </p>
            </div>
          </a>
        </div>

      `;

      videoSec.insertAdjacentHTML("beforeend", ele);
      console.log(data);
    }
  });