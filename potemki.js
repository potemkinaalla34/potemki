@@ -1,38 +1,38 @@
@media (max-width: 992px) {
	.body {
		.main-header {
			.npm-logo {
				width: 100px;
				float: left;
			}
  .body {
    .main-header {
      .npm-logo {
        width: 100px;
        float: left;
      }

			.packages-header {
				border-bottom: none;
			}
		}
	}
      .packages-header {
        border-bottom: none;
      }
    }
  }
}

@media (max-width: 768px) {
	.body {
		.content {
			padding-top: @mainHeaderHeight + @packagesHeaderHeight + @smRegistryInfoHeight + 10;
  .body {
    .content {
      padding-top: @mainHeaderHeight + @packagesHeaderHeight + @smRegistryInfoHeight + 10;

			.entry {
				.title {
					margin-bottom: 0;
				}
      .entry {
        .title {
          margin-bottom: 0;
        }

				.author {
					float: none !important;
					clear: both;
					padding: 0 0 5px 18px;
				}
			}
		}
        .author {
          float: none !important;
          clear: both;
          padding: 0 0 5px 18px;
        }
      }
    }

		.no-results {
			margin: 10px 0 0;
		}
	}
    .no-results {
      margin: 10px 0 0;
    }
  }
}
