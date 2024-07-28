const reanmeClientInfoToSK = (clientInfo) => {
    const newKeys = {
        name: "Meno",
        deliverables: "Výstupy",
        business: "Podnikanie",
        website: "Webstránka",
        assignment: "Zadanie",
    }
    const renamedObj = {}
    for (const key in clientInfo) {
        renamedObj[newKeys[key]] = clientInfo[key]
    }

    return renamedObj
}

const genClientInfoSK = (clientInfoSK) => {
    let output = ""
    for (const key in clientInfoSK) {
        if (clientInfoSK[key] != "") {
            output += `
            <tr>
                <td class='first-block'>${key}:</td>
                <td class='second-block'>${clientInfoSK[key]}</td>
            </tr>`
        }
    }

    return output
}

const genTemplate2 = (project) => {
    let clientInfoSK = reanmeClientInfoToSK(project.clientInfo)

    console.log(clientInfoSK);
    let output = `
    <div id="ravi-portfolio" class="animate-box template-2">
        <div class="container">
            <!-- NOTE : LEFT -->
            <div class="info-side col-lg-6">
                <!-- NOTE: TITLE -->
                <div class="row">
                    <div class="heading">
                    <h2>${project.title}</h2>
                    </div>
                    <div class="header-line"></div>
                </div>

                <div class="">
                    <div class="">

                    <table class="info">`

    let htmlClientInfo = genClientInfoSK(clientInfoSK)

    output += htmlClientInfo
    output += "</table>"

    // Display Attachments
    for (const attach of project.attachments) {
        output +=
            `
        <button style="display:block; margin: 0 auto" colspan="2" class='btn btn-default pulse-button'> 
            <a href='${attach.src}' target='_blank'>
                ${attach.nameSK} <i class='icon-file-pdf'></i>
            </a> 
        </button>
        `
    }

    // Right side with thumbnail
    output += `
                    </div>
                </div>

                <!-- NOTE - BODKY -->
                <div class="dots"></div>

            </div>

            <!-- NOTE : RIGHT -->
            <div class="img-side col-lg-6">
                <div style="background-image: url('../${project.thumbnail}')">
                </div>
            </div>
        </div>
      <div class="scroll"></div>

    </div>
    
    `

    // Description
    if (project.description != "") {
        output += `
            <div class="logo-desc container animate-box">
                ${project.description}
            </div>
        `
    }

    // Decide PHOTO EDITING or BRANDS 
    if (project.type == "BRANDS") {
        output += genSectionGallery(project.sections)
    } else if (project.type == "PHOTO EDITING") {
        genCompareGallery()
    }


    return output
}

const genTemplate3 = (project) => {
    let clientInfoSK = reanmeClientInfoToSK(project.clientInfo)

    let output = `
    <div id="ravi-portfolio" class="animate-box template-2 template-3">
        <div class="design-cube"></div>
        <div class="container">
            <!-- NOTE : RIGHT -->
            <div class="img-side col-lg-6">
                <div
                    style="background-image: url('../${project.thumbnail}'); ${project.contain ? "background-size == 1: contain" : ""}"> 
                </div>
            </div>
            <!-- NOTE : LEFT -->
            <div class="info-side col-lg-6">
                <!-- NOTE: TITLE -->
                <div class="row">
                    <div class="heading">
                    <h2>${project.title}</h2>
                    </div>
                    <div class="header-line"></div>
                </div>

                <div class="info-container">
                    <div class="">

                    <table class="info">
    `

    let htmlClientInfo = genClientInfoSK(clientInfoSK)
    output += htmlClientInfo

    output += "     </table>"

    // Display Attachments
    for (const attach of project.attachments) {
        output +=
            `
            <button style="display:block; margin: 0 auto" colspan="2" class='btn btn-default pulse-button'> 
                <a href='${attach.src}' target='_blank'>
                    ${attach.nameSK} <i class='icon-file-pdf'></i>
                </a> 
            </button>
            `
    }

    output += `
                    </div>
                    <!-- NOTE - BODKY -->
                    <div class="dots"></div>
                </div>
            </div>
        </div>
      <div class="scroll"></div>
    </div>
    `

    // Description
    if (project.description != "") {
        output += `
            <div class="logo-desc container animate-box">
                ${project.description}
            </div>
        `
    }

    // Decide PHOTO EDITING or BRANDS 
    if (project.type == "BRANDS") {
        output += genSectionGallery(project.sections)
    } else if (project.type == "PHOTO EDITING") {
        output += genCompareGallery(project.sections)
    }


    return output
}

const genTemplate5 = (project) => {
    let output = `
    <div id="ravi-portfolio" class="animate-box template-2 template-5">
        <div class="container">
            <!-- NOTE : LEFT -->

            <div class="img-side col-md-6">
                <div class="dots"></div>

                <div class="heading">
                    <h2>My</h2>
                    <h2>Creation</h2>
                </div>
                <div class="masked-thumbnail"
                    style="background-image: url('${project.sections[0].imgs[0].src}')">
                </div>
            </div>
            <!-- NOTE : RIGHT -->
            <div class="info-side col-lg-5 ">
                <!-- NOTE: TITLE -->
                <div class="heading">
                    <h2>${project.title}</h2>
                </div>

                <div class="info-container">
                    <div class="">
                        ${project.description}
                    </div>
                </div>
            </div>
        </div>
        <div class="scroll"></div>

    </div>
    `

    if (project.slider == 1) {
        // Slider
        output += genSlider(project.sections[0].imgs)
    } else {
        // Illustrations
        output += genSectionGallery(project.sections)
    }

    console.log(project.slider);

    return output
}

const genTemplate6 = (project) => {
    let output = `
    <div id="ravi-portfolio" class="animate-box template-2 template-3 template-6">
        <div class="design-cube"></div>
        <div class="container">
            <!-- NOTE : RIGHT -->
            <div class="img-side col-lg-5">
                <div class="masked-thumbnail"
                    style="background-image: url('${project.sections[0].imgs[0].src}')">
                </div>
            </div>
            <!-- NOTE : LEFT -->
            <div class="info-side col-lg-7">
                <!-- NOTE: TITLE -->
                <div class="design-cube"></div>
                <div class="row">
                    <div class="heading">
                    <h2>${project.title}</h2>
                    </div>
                    <div class="header-line"></div>
                </div>

                <div class="info-container">
                    <div class="">
                        ${project.description}
                    </div>

                    <!-- NOTE - BODKY -->
                </div>
                <div class="dots"></div>
            </div>
        </div>
        <div class="scroll"></div>

    </div>
    `

    if (project.slider) {
        // Slider
        output += genSlider(project.sections[0].imgs)
    } else {
        // Illustrations
        output += genSectionGallery(project.sections)
    }

    return output
}

const genSectionGallery = (sections) => {
    let output = `
    <div id="project-showcase" class="animate-box">`

    // Generate sections
    for (const section of sections) {
        output += `
        <div class="container ravi-heading">
            <h2>${section.title}</h2>
            <div class="animated-thumbnails-gallery col-md-12 flexbin flexbin-margin ">
        `

        // Looping images of section
        for (const img of section.imgs) {
            output += `
            <a class="gallery-item " data-src="${img.src}"
            data-sub-html="
                <p>${img.caption}</p>">
                <img loading="lazy" alt="${img.caption}" class="img-responsive" src="${img.src}" />
            </a>
            `
        }

        output += "</div></div>"

    }

    output += `
    </div>
    `

    return output
}

// TODO
const genCompareGallery = (sections) => {
    let output = `
    <div id="project-showcase" class="animate-box">

        <div class="container ravi-heading">
            <div class="before-after-container">
                <h2>Pred</h2>
                <h2>Po</h2>
            </div>
    `

    for (const section of sections) {
        output += `
            <div class="animated-thumbnails-gallery col-md-12 before-after-container" style="">
                <div class="gallery-item " data-src="${section.imgs[0].src}"
                    data-sub-html="<h2>PRED</h2><p>${section.imgs[0].caption}</p>">
                    <img loading="lazy" alt="layers of blue." class="img-responsive"
                    src="${section.imgs[0].src}" />
                </div>
                <div class="gallery-item " data-src="${section.imgs[1].src}"
                    data-sub-html="<h2>PRED</h2><p>${section.imgs[1].caption}</p>">
                    <img loading="lazy" alt="layers of blue." class="img-responsive"
                    src="${section.imgs[1].src}" />
                </div>
            </div>
        `
    }

    output += `
            </div>
        </div>`

    return output;


}

const genSlider = (imgs) => {
    return `
    <div id="project-showcase" class="animate-box">
        <!-- Slider Before/After -->
        <div class="container ravi-heading">
            <div id="slider">
                <main>
                    <div class="sld-container">
                    <div class="sld-image-container">
                        <img loading="lazy" class="image-before sld-slider-image"
                            src="${imgs[1].src}" alt="Before Image">
                        <img loading="lazy" class="image-after sld-slider-image"
                            src="${imgs[0].src}" alt="After Image">

                    </div>
                    <input type="range" min="0" max="100" value="50" class="sld-slider"
                        aria-label="Percentage of before photo shown">
                    <div class="sld-slider-line"></div>
                    <div class="sld-slider-button" aria-hidden="true">
                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor"
                            viewBox="0 0 256 256">
                            <rect width="256" height="256" fill="none"></rect>
                            <line x1="128" y1="40" x2="128" y2="216" fill="none" stroke="currentColor" stroke-linecap="round"
                                stroke-linejoin="round" stroke-width="16"></line>
                            <line x1="96" y1="128" x2="16" y2="128" fill="none" stroke="currentColor" stroke-linecap="round"
                                stroke-linejoin="round" stroke-width="16"></line>
                            <polyline points="48 160 16 128 48 96" fill="none" stroke="currentColor" stroke-linecap="round"
                                stroke-linejoin="round" stroke-width="16"></polyline>
                            <line x1="160" y1="128" x2="240" y2="128" fill="none" stroke="currentColor" stroke-linecap="round"
                                stroke-linejoin="round" stroke-width="16"></line>
                            <polyline points="208 96 240 128 208 160" fill="none" stroke="currentColor" stroke-linecap="round"
                                stroke-linejoin="round" stroke-width="16"></polyline>
                        </svg>
                    </div>
                    </div>
                </main>
            </div>
        </div>
    </div>
    `
}