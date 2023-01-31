import "./scss/paid-media.scss";

const PaidMedia = () => {
  const exploreData = [
    {
      img: "https://www.dewalt.com/NAG/PRODUCT/IMAGES/HIRES/DCCS670X1/DCCS670X1_1.jpg?resize=530x530",
      title: "60V Chainsaws",
      copy: "The FLEXVOLT 60V MAX* Chainsaw features tool-free chain tensioning and combination tooled/toolless bar retention knob to enable proper bar clamping force. It also features a high-efficiency brushless motor to help maximize run time and motor life and auto-oiling for continuous lubrication.",
    },
    {
      img: "https://www.dewalt.com/NAG/PRODUCT/IMAGES/HIRES/DWPW2400/DWPW2400_1.jpg?resize=530x530",
      title: "2400 PSI Pressure Washers",
      copy: "You can rely on the durable, mobile, and powerful DEWALT 2400 psi Pressure Washer, delivering enough power to handle your outdoor cleaning tasks. Be prepared to tackle just about any job or wash your vehicle with the accessories you need.",
    },
    {
      img: "https://www.dewalt.com/NAG/PRODUCT/IMAGES/HIRES/DCED472X1/DCED472X1_1.jpg?resize=530x530",
      title: "Edgers",
      copy: "Get the versatility and cutting power needed to finish the job with the DEWALT 60V MAX* Attachment Capable Edger. The high-efficiency brushless motor maximizes runtime and product life while consistently providing the capacity to tackle tough overgrowth edging and withstand heavy-duty use.",
    },
  ];

  const promoBlocks = [
    {
      img: "https://www.cubcadet.com/on/demandware.static/-/Sites-cubcadet-Library/default/dwd1b761f5/CC_ExtWarranty_Shield_Logo318x180.jpg",
      title: "DeWalt Extended Warranty",
      copy: "After the manufacturer's warranty expires, the Cub Cadet Extended Warranty adds another 2 years of coverage. Should your product need repair, this plan will help keep you covered.",
    },
    {
      img: "https://bynder.sbdinc.com/m/3e82a3b027e97d63/Drupal_Medium-DW_ToolConnect_A3.jpg",
      title: "Independent Dealer Advantage",
      copy: "Cub Cadet dealers put heart into everything - from their lineups to relationships with customers like you. Cub Cadet Independent Dealers work hard to exceed all expectations.",
    },
    {
      img: "https://bynder.sbdinc.com/m/450a8156102c87fa/webimage-DW_connected-products-callout1_toolconnect_GEC1-jpg.jpg?resize=530x530",
      title: "Genuine Advantage",
      copy: "Cub Cadet Genuine Parts are specifically designed for an precise fit and optimal performance.",
    },
  ];

  return (
    <>
      {/* breadcrumbs */}
      <div class="coh-container breadcrumbs">
        <div class="coh-block coh-style-breadcrumbs">
          <div
            id="block-duplo-theme-breadcrumbs"
            class="settings-tray-editable"
            data-drupal-settingstray="editable"
          >
            <nav role="navigation" aria-labelledby="system-breadcrumb">
              <h2 id="system-breadcrumb" class="visually-hidden">
                Breadcrumb
              </h2>
              <ol>
                <li>
                  <a href="#top">Home</a>
                </li>
                <li>Featured Local Dealer</li>
              </ol>
            </nav>
          </div>
        </div>
      </div>

      {/* Hero */}
      <div
        class="coh-container ssa-component coh-component ssa-component-instance-e47f4f6c-863a-4483-9dd7-6dcb0f89fe1c coh-component-instance-e47f4f6c-863a-4483-9dd7-6dcb0f89fe1c bg-container coh-style-margin-bottom-none coh-style-page-header ssa-instance-4b5cb025-0759-4f3a-b6b3-6ec66fa09fc9e47f4f6c-863a-4483-9dd7-6dcb0f89fe1c coh-ce-cpt_page_header-1c6b715c"
        data-bg-align="center-right"
        data-select-theme="light"
        data-force-uppercase="1"
      >
        <div class="coh-container ssa-component coh-component ssa-component-instance-84b1769d-fcb6-4795-8ccc-bc379d1819e9 coh-component-instance-84b1769d-fcb6-4795-8ccc-bc379d1819e9 media-container bynder-media-container">
          <picture>
            <img
              src="https://bynder.sbdinc.com/m/242b2caf7ab1aaf4/Drupal_Large-DW_20V-Power-tools-Only_G1.jpg"
              alt="Threaded Rod Cutter being used by worker on an underground pipe"
              class="coh-image coh-image-responsive-xl coh-lazy-loaded coh-lazy-loading"
              loading="lazy"
              data-was-processed="true"
            />
          </picture>
        </div>
        <div class="coh-container ssa-component coh-component ssa-component-instance-21a722a9-a1c3-478b-9588-a0d84eb43756 coh-component-instance-21a722a9-a1c3-478b-9588-a0d84eb43756 section-container-wrapper  coh-ce-cpt_section-a177ea9c">
          <section
            class="coh-container section coh-style-section"
            data-gs-background-color="default"
            data-gs-spacing="none"
            data-gs-min-height=""
            data-gs-overlay=""
            data-gs-foreground-color="dark"
            data-gs-remove-spacing=""
          >
            <div class="coh-container section-inner">
              <div class="coh-container coh-container-boxed">
                <div class="coh-container ssa-component coh-component ssa-component-instance-8b36c8f9-19a3-45d3-8c62-989efa73f2be coh-component-instance-8b36c8f9-19a3-45d3-8c62-989efa73f2be coh-style-columns">
                  <div class="coh-row coh-row-xl coh-row-visible-xl">
                    <div
                      class="coh-row-inner ssa-instance-e47f4f6c-863a-4483-9dd7-6dcb0f89fe1c8b36c8f9-19a3-45d3-8c62-989efa73f2be coh-ce-cpt_columns-c79f689d"
                      style={{ justifyContent: "center" }}
                    >
                      <div class="coh-column ssa-component coh-component ssa-component-instance-41e7c3a7-1b90-4e79-98af-1a8bd182909f coh-component-instance-41e7c3a7-1b90-4e79-98af-1a8bd182909f coh-visible-ps coh-col-ps-12 coh-visible-sm coh-col-sm-10 coh-visible-md coh-col-md-8 coh-visible-xl coh-col-xl-8">
                        <div
                          class="coh-container text-main-container"
                          data-text-align="center"
                        >
                          <div class="coh-container ssa-component coh-component ssa-component-instance-14a88b82-7b38-4520-a71a-df45d0f0acce coh-component-instance-14a88b82-7b38-4520-a71a-df45d0f0acce text-container coh-style-text">
                            <div class="coh-container typography-container coh-style-container-layout">
                              <h1
                                class="coh-heading coh-style-h3---display"
                                style={{ fontSize: "2.3rem" }}
                              >
                                YOUR FEATURED LOCAL DEALER:
                              </h1>
                              <div class="coh-container">
                                <div class="coh-wysiwyg">
                                  <p
                                    style={{
                                      marginBottom: "4px",
                                      fontSize: "1.3rem",
                                    }}
                                  >
                                    <strong>
                                      Worcester Sales and Service, Inc.
                                    </strong>
                                  </p>
                                  <p
                                    style={{
                                      marginBottom: "4px",
                                      fontSize: "1.3rem",
                                    }}
                                  >
                                    (440) 327-2196
                                  </p>
                                  <p
                                    style={{
                                      marginBottom: "0",
                                      fontSize: "1rem",
                                    }}
                                  >
                                    34200 LORAIN ROAD
                                  </p>
                                  <p
                                    style={{
                                      marginBottom: "0",
                                      fontSize: ".8rem",
                                    }}
                                  >
                                    NORTH RIDGEVILLE OH 44039
                                  </p>
                                  <p>
                                    <a
                                      href="#top"
                                      class="coh-link coh-style-button-action coh-style-tertiary-button "
                                    >
                                      <span class="coh-inline-element cta-text">
                                        View Dealer Website
                                      </span>
                                    </a>
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="coh-container ssa-component coh-component ssa-component-instance-670c6324-874f-4823-8fd2-c9aa9388ea3a coh-component-instance-670c6324-874f-4823-8fd2-c9aa9388ea3a reusable-button-set btn-container"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>

      {/* Contact a dealer in your area. */}
      <div
        class="coh-container ssa-component coh-component ssa-component-instance-a5db2769-2c2e-4f03-aa49-a2b00fb01b0e coh-component-instance-a5db2769-2c2e-4f03-aa49-a2b00fb01b0e split-background coh-style-margin-bottom-none coh-style-grid-container ssa-instance-a5db2769-2c2e-4f03-aa49-a2b00fb01b0e coh-ce-cpt_grid_container-a806e8a9"
        data-gs-background-color="split"
        data-gs-spacing="none"
        style={{ backgroundColor: "#000" }}
      >
        <div class="coh-container ssa-component coh-component ssa-component-instance-baf0c89e-a290-4908-9d43-180bf63887c0 coh-component-instance-baf0c89e-a290-4908-9d43-180bf63887c0 section-container-wrapper  coh-ce-cpt_section-a177ea9c">
          <section
            class="coh-container section coh-style-section"
            data-gs-background-color="default"
            data-gs-spacing="none"
            data-gs-min-height=""
            data-gs-overlay=""
            data-gs-foreground-color="dark"
            data-gs-remove-spacing=""
          >
            <div class="coh-container section-inner">
              <div class="coh-container coh-container-boxed">
                <div
                  class="coh-container content-container"
                  data-gs-background-color="dark-grey"
                  data-gs-spacing="md"
                  data-select-theme="dark-grey"
                >
                  <div class="coh-container ssa-component coh-component ssa-component-instance-5ca7257c-96f4-4e1d-8cee-84c1db77e9bf coh-component-instance-5ca7257c-96f4-4e1d-8cee-84c1db77e9bf coh-style-columns">
                    <div class="coh-row coh-row-xl coh-row-visible-xl">
                      <div class="coh-row-inner ssa-instance-a5db2769-2c2e-4f03-aa49-a2b00fb01b0e5ca7257c-96f4-4e1d-8cee-84c1db77e9bf coh-ce-cpt_columns-c79f689d">
                        <div class="coh-column ssa-component coh-component ssa-component-instance-87366683-97b6-40e3-88a0-35f606dfa559 coh-component-instance-87366683-97b6-40e3-88a0-35f606dfa559 coh-visible-ps coh-col-ps-12 coh-visible-sm coh-col-sm-12 coh-visible-md coh-col-md-12 coh-visible-xl coh-col-xl-12">
                          <div
                            class="coh-container ssa-component coh-component ssa-component-instance-52928573-70f1-4d47-b436-5cae34db8189 coh-component-instance-52928573-70f1-4d47-b436-5cae34db8189 rich-text-editor split-background coh-style-rich-text-editor ssa-instance-52928573-70f1-4d47-b436-5cae34db8189 coh-ce-cpt_rich_text_editor-f4e8cdff"
                            data-theme="light"
                          >
                            <div class="coh-container ssa-component coh-component ssa-component-instance-036231f0-1d46-4c53-b8d0-7c57488d86e4 coh-component-instance-036231f0-1d46-4c53-b8d0-7c57488d86e4 section-container-wrapper coh-style-margin-bottom-none coh-ce-cpt_section-a177ea9c">
                              <section
                                class="coh-container section coh-style-section"
                                data-gs-background-color="default"
                                data-gs-spacing="none"
                                data-gs-min-height=""
                                data-gs-overlay=""
                                data-gs-foreground-color="dark"
                                data-gs-remove-spacing=""
                              >
                                <div class="coh-container section-inner">
                                  <div class="coh-container coh-container-boxed">
                                    <div class="coh-container ssa-component coh-component ssa-component-instance-331ef759-55e0-4b91-9a98-1731be855bf4 coh-component-instance-331ef759-55e0-4b91-9a98-1731be855bf4 text-container coh-style-text">
                                      <div
                                        class="coh-container typography-container coh-style-container-layout"
                                        data-gs-text-align="left"
                                        data-gs-width=""
                                        data-gs-pos="left"
                                      >
                                        <div class="coh-container">
                                          <div
                                            class="coh-wysiwyg"
                                            style={{ textAlign: "center" }}
                                          >
                                            <h2
                                              class="coh-style-h4---display text-align-center"
                                              data-renderer-start-pos="2809"
                                            >
                                              Contact a dealer in your area.
                                            </h2>
                                            <p
                                              style={{
                                                textAlign: "center",
                                                maxWidth: "600px",
                                                marginLeft: "auto",
                                                marginRight: "auto",
                                              }}
                                            >
                                              There are two options available to
                                              you on dewalt.com in order to
                                              provide seamless access of DeWalt
                                              products: Dealer Delivery or
                                              Pick-Up.
                                            </p>
                                            <a
                                              href="#top"
                                              class="coh-link coh-style-button-action coh-style-branded-button "
                                            >
                                              <span class="coh-inline-element cta-text">
                                                Find a Dealer
                                              </span>
                                            </a>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </section>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>

      {/* Three Products */}
      <div
        class="coh-container ssa-component coh-component ssa-component-instance-4af6128d-a82d-4ce3-a3fb-0f2f672d6979 coh-component-instance-4af6128d-a82d-4ce3-a3fb-0f2f672d6979 split-background coh-style-margin-bottom-none coh-style-grid-container ssa-instance-4af6128d-a82d-4ce3-a3fb-0f2f672d6979 coh-ce-cpt_grid_container-a806e8a9"
        data-gs-background-color="light-grey"
        style={{ paddingTop: "60px", paddingBottom: "60px" }}
      >
        <div class="coh-container ssa-component coh-component section-container-wrapper  coh-ce-cpt_section-a177ea9c">
          <section
            class="coh-container section coh-style-section"
            data-gs-background-color="default"
            data-gs-spacing="none"
            data-gs-min-height=""
            data-gs-overlay=""
            data-gs-foreground-color="dark"
            data-gs-remove-spacing=""
          >
            <div class="coh-container section-inner">
              <div class="coh-container coh-container-boxed">
                <div
                  class="coh-container content-container"
                  data-gs-background-color="light-grey"
                  data-gs-spacing="sm"
                  data-select-theme="light-grey"
                >
                  <h2
                    class="coh-style-h4---display text-align-center"
                    style={{ marginBottom: "30px" }}
                  >
                    Explore Lawn & Garden
                  </h2>
                  <div class="coh-container ssa-component coh-component coh-style-columns">
                    <div
                      class="coh-row coh-row-xl coh-row-visible-xl"
                      data-coh-row-match-heights='{"xl":{"target":"none"}}'
                    >
                      <div class="coh-row-inner">
                        {exploreData.map((block) => {
                          return (
                            <div class="coh-column ssa-component coh-component coh-visible-ps coh-col-ps-12 coh-visible-sm coh-col-sm-4 coh-visible-md coh-col-md-4 coh-visible-xl coh-col-xl-4">
                              <div
                                class="coh-wysiwyg"
                                style={{
                                  padding: "30px",
                                  backgroundColor: "#fff",
                                  display: "flex",
                                  flexDirection: "column",
                                  height: "100%",
                                  alignItems: "flex-start",
                                }}
                              >
                                <img
                                  src={block.img}
                                  alt=""
                                  // style={{ marginBottom: "40px" }}
                                />
                                <hr style={{ borderColor: "#dddddd" }} />
                                <h2 data-renderer-start-pos="2846">
                                  {block.title}
                                </h2>
                                <p style={{ marginBottom: "20px" }}>
                                  {block.copy}
                                </p>
                                <a
                                  href="#top"
                                  class="coh-link heading-link bottom-link coh-style-button-action "
                                  style={{ marginTop: "auto" }}
                                >
                                  View More
                                </a>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>

      {/* Video */}
      <div
        class="coh-container ssa-component coh-component ssa-component-instance-2cf8a1a7-a97c-47a4-92e0-8f1cd24aa017 coh-component-instance-2cf8a1a7-a97c-47a4-92e0-8f1cd24aa017 split-background coh-style-50-50-content coh-style-margin-bottom-medium ssa-instance-2cf8a1a7-a97c-47a4-92e0-8f1cd24aa017 coh-ce-cpt_50_50_content-c2429d6f"
        data-content-order="text-first"
        data-bg-align="top-center"
        data-select-theme="light"
        data-force-uppercase=""
        style={{ paddingTop: "40px" }}
      >
        <div class="coh-container ssa-component coh-component ssa-component-instance-3b45a551-905b-468a-8069-6fb7c001f006 coh-component-instance-3b45a551-905b-468a-8069-6fb7c001f006 section-container-wrapper  coh-ce-cpt_section-a177ea9c">
          <section
            class="coh-container section coh-style-section"
            data-gs-background-color="light"
            data-gs-spacing="none"
            data-gs-min-height=""
            data-gs-overlay=""
            data-gs-foreground-color="dark"
            data-gs-remove-spacing=""
          >
            <div class="coh-container section-inner">
              <div class="coh-container coh-container-boxed">
                <div
                  class="coh-row coh-row-xl coh-row-visible-xl"
                  data-coh-row-match-heights='{"xl":{"target":"none"}}'
                >
                  <div class="coh-row-inner">
                    <div class="coh-column image-column coh-visible-ps coh-col-ps-12 coh-visible-sm coh-col-sm-12 coh-visible-xl coh-col-xl-6">
                      <div class="coh-container media-main-container">
                        <div class="coh-container ssa-component coh-component ssa-component-instance-8db4403e-9935-4bfa-8983-021d9bf46bdb coh-component-instance-8db4403e-9935-4bfa-8983-021d9bf46bdb media-container bynder-media-container">
                          <picture>
                            <img
                              src="https://bynder.sbdinc.com/m/52350189b746307b/Drupal_Small-DW_ServiceCentersCOVID-EN-thumb_GEC1.jpg"
                              alt=""
                              class="coh-image coh-image-responsive-xl coh-lazy-loaded"
                              loading="lazy"
                            />
                          </picture>
                        </div>
                      </div>
                    </div>
                    <div class="coh-column text-column coh-visible-ps coh-col-ps-12 coh-visible-sm coh-col-sm-12 coh-visible-xl coh-col-xl-6">
                      <div
                        class="coh-container text-main-container"
                        data-gs-background-color="light"
                      >
                        <div class="coh-container">
                          <p class="coh-heading eyebrow coh-style-paragraph---default">
                            Lorem ipsum dolor sit
                          </p>
                          <h2 class="coh-heading subtitle coh-style-h4---display">
                            Nam vel enim ut eros aliquet congue sit amet ut nun
                          </h2>
                          <div class="coh-container ssa-component coh-component ssa-component-instance-7e2a9262-deb3-4d3a-8927-581f26a0948e coh-component-instance-7e2a9262-deb3-4d3a-8927-581f26a0948e text-container coh-style-text">
                            <div
                              class="coh-container typography-container coh-style-container-layout"
                              data-gs-text-align="left"
                              data-gs-width=""
                              data-gs-pos="left"
                            >
                              <div class="coh-container">
                                <div class="coh-wysiwyg">
                                  <p>
                                    Quisque orci diam, ornare nec ligula sit
                                    amet, tincidunt congue tellus. Proin
                                    condimentum ex ac nisi ullamcorper
                                    facilisis. Morbi maximus ut sapien eget
                                    tempus. Morbi sit amet blandit orci. Proin
                                    nec elementum ligula, quis scelerisque
                                    velit. Vivamus quis magna tempor,
                                    scelerisque ex ac, aliquam magna. Cras eu
                                    consectetur leo, vel varius est.
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="coh-container ssa-component coh-component ssa-component-instance-2e669407-72f9-4e23-b6fc-73ebe00e9ca8 coh-component-instance-2e669407-72f9-4e23-b6fc-73ebe00e9ca8 reusable-button-set btn-container">
                            <div class="coh-container link-container">
                              <div class="coh-container">
                                <a
                                  class="coh-link coh-style-button-action coh-style-secondary-button coh-style-play-video"
                                  data-modal-open="video-fight-covid"
                                  role="button"
                                  data-trigger="true"
                                  tabindex="0"
                                  href="#top"
                                >
                                  <span
                                    class="coh-inline-element cta-icon"
                                    data-icon=""
                                  ></span>
                                  <span class="coh-inline-element cta-text">
                                    Play Video
                                  </span>
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>

      {/* Three promoBlocks */}
      <div
        class="coh-container ssa-component coh-component ssa-component-instance-4af6128d-a82d-4ce3-a3fb-0f2f672d6979 coh-component-instance-4af6128d-a82d-4ce3-a3fb-0f2f672d6979 split-background coh-style-margin-bottom-none coh-style-grid-container ssa-instance-4af6128d-a82d-4ce3-a3fb-0f2f672d6979 coh-ce-cpt_grid_container-a806e8a9"
        style={{ paddingTop: "60px", paddingBottom: "60px" }}
      >
        <div class="coh-container ssa-component coh-component section-container-wrapper  coh-ce-cpt_section-a177ea9c">
          <section
            class="coh-container section coh-style-section"
            data-gs-background-color="default"
            data-gs-spacing="none"
            data-gs-min-height=""
            data-gs-overlay=""
            data-gs-foreground-color="dark"
            data-gs-remove-spacing=""
          >
            <div class="coh-container section-inner">
              <div class="coh-container coh-container-boxed">
                <div
                  class="coh-container content-container"
                  data-gs-spacing="sm"
                >
                  <h2
                    class="coh-style-h4---display text-align-center"
                    style={{ marginBottom: "30px" }}
                  >
                    Explore Lawn & Garden
                  </h2>
                  <div class="coh-container ssa-component coh-component coh-style-columns">
                    <div class="coh-row coh-row-xl coh-row-visible-xl">
                      <div class="coh-row-inner">
                        {promoBlocks.map((block) => {
                          return (
                            <div class="coh-column ssa-component coh-component coh-visible-ps coh-col-ps-12 coh-visible-sm coh-col-sm-4 coh-visible-md coh-col-md-4 coh-visible-xl coh-col-xl-4">
                              <div
                                class="coh-wysiwyg"
                                style={{
                                  padding: "30px",
                                  backgroundColor: "#eeeeee",
                                  display: "flex",
                                  flexDirection: "column",
                                  height: "100%",
                                  alignItems: "flex-start",
                                }}
                              >
                                <div
                                  style={{
                                    minHeight: "220px",
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    backgroundColor: "#fff",
                                    width: "100%",
                                  }}
                                >
                                  <img src={block.img} alt="" />
                                </div>
                                <hr
                                  style={{
                                    borderColor: "#dddddd",
                                  }}
                                />
                                <h2 data-renderer-start-pos="2846">
                                  {block.title}
                                </h2>
                                <p style={{ marginBottom: "20px" }}>
                                  {block.copy}
                                </p>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>

      {/* CTA */}
      <div
        class="coh-container ssa-component coh-component ssa-component-instance-a4f82cda-44c7-4a01-8a7a-9576c5138f41 coh-component-instance-a4f82cda-44c7-4a01-8a7a-9576c5138f41 split-background coh-style-margin-bottom-none coh-style-grid-container ssa-instance-a4f82cda-44c7-4a01-8a7a-9576c5138f41 coh-ce-cpt_grid_container-a806e8a9"
        data-gs-background-color="light-grey"
        data-gs-spacing="sm"
      >
        <div class="coh-container ssa-component coh-component ssa-component-instance-baf0c89e-a290-4908-9d43-180bf63887c0 coh-component-instance-baf0c89e-a290-4908-9d43-180bf63887c0 section-container-wrapper  coh-ce-cpt_section-a177ea9c">
          <section
            class="coh-container section coh-style-section"
            data-gs-background-color="default"
            data-gs-spacing="none"
            data-gs-min-height=""
            data-gs-overlay=""
            data-gs-foreground-color="dark"
            data-gs-remove-spacing=""
          >
            <div class="coh-container section-inner">
              <div class="coh-container coh-container-boxed">
                <div
                  class="coh-container content-container"
                  data-gs-background-color="light-grey"
                  data-gs-spacing="none"
                  data-select-theme="light-grey"
                >
                  <div class="coh-container ssa-component coh-component ssa-component-instance-5ca7257c-96f4-4e1d-8cee-84c1db77e9bf coh-component-instance-5ca7257c-96f4-4e1d-8cee-84c1db77e9bf coh-style-columns">
                    <div class="coh-row coh-row-xl coh-row-visible-xl">
                      <div
                        class="coh-row-inner ssa-instance-a4f82cda-44c7-4a01-8a7a-9576c5138f415ca7257c-96f4-4e1d-8cee-84c1db77e9bf coh-ce-cpt_columns-c79f689d"
                        style={{ justifyContent: "center" }}
                      >
                        <div class="coh-column ssa-component coh-component ssa-component-instance-87366683-97b6-40e3-88a0-35f606dfa559 coh-component-instance-87366683-97b6-40e3-88a0-35f606dfa559 coh-visible-ps coh-col-ps-12 coh-visible-sm coh-col-sm-6 coh-visible-md coh-col-md-6 coh-visible-xl coh-col-xl-6">
                          <div
                            class="coh-container ssa-component coh-component ssa-component-instance-4fd48178-387d-4505-9805-7cb5d4c91077 coh-component-instance-4fd48178-387d-4505-9805-7cb5d4c91077 coh-style-image-text-tile"
                            data-force-uppercase=""
                          >
                            <div
                              class="coh-wysiwyg"
                              style={{ textAlign: "center" }}
                            >
                              <h2
                                class="text-align-center"
                                style={{ marginBottom: "20px" }}
                              >
                                <span class="coh-style-h4---display">
                                  Exceptional Financing Offers<sup>*</sup>.
                                </span>
                              </h2>
                              <p
                                style={{
                                  fontSize: "0.7rem",
                                  lineHeight: "1.5",
                                  marginBottom: "14px",
                                }}
                              >
                                *Cub Cadet financing is available at
                                participating Cub Cadet Independent Dealers
                                only. Qualifying product purchases subject to
                                credit approval. Please see your local dealer
                                for details.
                              </p>
                            </div>
                          </div>
                          <div
                            class="coh-container ssa-component coh-component ssa-component-instance-6f211890-04a7-422d-9319-3df26e655ced coh-component-instance-6f211890-04a7-422d-9319-3df26e655ced coh-style-single-cta coh-style-margin-bottom-small coh-container-boxed"
                            data-button-alignment="center"
                          >
                            <a
                              href="#top"
                              class="coh-link coh-style-button-action coh-style-branded-button coh-style-open-external-link"
                              target="_blank"
                            >
                              <span class="coh-inline-element cta-text">
                                Learn More
                              </span>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};
export default PaidMedia;
