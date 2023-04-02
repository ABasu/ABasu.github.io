gem query --local # List installed gems
gem uninstall bundler # uninstalle bundler 2.0
bundle lock --update # rebuild lockfile with bundler 2.4
bundle install  # install theme
bundle exec jekyll serve  # start server first time
jekyll serve   # start server


Each post should have:
layout:
title:
categories:
image:
tags: [sticky|featured]
excerpt:
author:


{% figure caption:"Le logo de **Jekyll** et son clin d'oeil à Robert Louis Stevenson" %}
    ![Le logo de Jekyll](/assets/images/2018-08-07-jekyll-logo.png)
{% endfigure %}
