function showContent(id) {
  var contents = document.querySelectorAll(".content");
  contents.forEach((content) => content.classList.remove("active"));

  var activeContent = document.getElementById(id);
  activeContent.classList.add("active");

  if (id === "chatboxContent") {
    document.body.classList.add("no-scroll");
  } else if (id === "loginContent") {
    document.body.classList.add("no-scroll");
  } else if (id === "signupContent") {
    document.body.classList.add("no-scroll");
    document.body.classList.add("bg-yellow_body");
  } 
  else if (id === "blogContent" || id === "exerciseContent"  || id === "aboutContent"  || id === "pricingContent") {
    document.body.classList.add("bg-black");
    document.body.classList.add("no-scroll");
  }else {
    document.body.classList.remove("no-scroll");
    document.body.classList.remove("bg-black");
  }
}


<div
		class="absolute text-white cursor-pointer hidden text-3xl top-[30px] left-[10px]">
					<i class="ti ti-menu-2 p-2 rounded-md"
						style="box-shadow: 0 0 0 1px #3d3d3d;" onclick="show_menu_blog()"></i>

				</div>
				<div class="w-0 h-full top-0 absolute bg-[#131313] " id="menu_blog"
					style="z-index: 2;">
					<i
						class="ti ti-x text-white cursor-pointer absolute right-[10px] top-[10px] border p-3 rounded-md"
						onclick="show_menu_blog()"></i>
				</div>
				<div class="text-white flex  mt-[2rem] justify-center">
					<button class="rounded-md   py-2 px-4" onclick="show_modal()"
						style="box-shadow: 0 0 0 1px #3d3d3d;">Launcher</button>
				</div>
				<div class="absolute gj_ryye_55 top-0 -mt-[56px] flex items-center justify-center h-[680px] w-full" style="z-index: -99;" id="blog_bg">
					<div
						class="w-[34rem] shadow-2xl modal fixed  rounded-md h-[28rem] bg-[#ffffff] "
						id="content_modal" style="z-index: 5;overflow: hidden;">
						<i
							class="ti ti-x cursor-pointer absolute right-[10px] top-[10px] border border-slate-300 p-3 rounded-md"
							onclick="show_modal()"></i>
					</div>
</div >