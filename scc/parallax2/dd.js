TweenMax.set('.progress .bar', { width: 0 });
let mode;
let modeCheck;
let wWidth = $(window).width();
function loading() {
    let progress = $(".progress"),
        progressText = progress.find(".progress-text"),
        imgLoad = imagesLoaded("body"),
        imgTotal = imgLoad.images.length,
        imgLoaded = 0,
        imgCurrent = 0,
        progressTimer = setInterval(updateProgress, 1000 / 20);

    imgLoad.on("progress", function () {
        imgLoaded++;
    });

    function updateProgress() {
        let target = (imgLoaded / imgTotal) * 100;

        imgCurrent += (target - imgCurrent) * 0.1;
        progressText.text(Math.floor(imgCurrent) + "%");

        TweenMax.to('.progress .bar', .3, { width: imgCurrent + '%' });
        // tlBar.staggerFromTo(".progress .bar", 0.8, 
        //     {ease: Back.easeOut.config(1.7), delay: 2, scale:0}, // staggerFromto瑜� �곕㈃ css�� 誘몃━ �ㅼ젙�덊빐�볦븘�� 珥덇린媛� �ㅼ젙 媛���
        //     {ease: Back.easeOut.config(1.7), delay: 2, scale:1});

        if (imgCurrent >= 100) { // �앸궗�꾨븣
            clearInterval(progressTimer); //怨꾩궛 洹몃쭔
            progressText.text(100 + "%");
            // progress.delay(1000).animate({ top: "-130%" },400); // 濡쒕뵫李� �꾨줈 �щ┝



            TweenMax.to('.progress .under', 1, { skewY: 10, ease: Power0.easeNone });
            TweenMax.to('.progress', 1, { y: -imgCurrent * 1.6 + '%', ease: Power0.easeOut });



            // tlLoad.to('')

        }

        if (imgCurrent > 99) { // 99媛� �섎㈃ �덉삱�쇨�湲� �뚮Ц�� 100�쇰줈 諛붽퓭以�
            imgCurrent = 100;
        }
    }
}
loading();


$('.mode').click(function () {
    if ($(this).hasClass('ver')) {
        mode = 'v';
    } else if ($(this).hasClass('hor')) {
        mode = 'h';
    }
    $('.m-select').fadeOut(500);
})

if (wWidth > 1500) {
    modeCheck = setInterval(() => {
        contents();
    }, 1000);
} else {
    mode = 'v';
    $('.m-select').css('display', 'none');
    contents();
}

function contents() {
    if (mode === 'v') {
        setTimeout(() => {
            clearInterval(modeCheck);
            $('body').css('overflowX ', 'hidden');
            $('#horizontal').css('display', 'none');
            $('#vertical').css('display', 'block');
            console.log('�몃줈紐⑤뱶�ㅽ뻾以�');
            // event 
            let effect = {
                s1: {
                    title: {
                        dom: $('.sec1 .stext > div'),
                        offset: [],
                    }
                },
                s2: {
                    title: {
                        dom: $('.sec2 .stext'),
                        offset: [],
                        show: false,
                    },
                    desc: {
                        dom: $('.sec2 .desc > div'),
                        offset: [],
                        show: false,
                    },
                    character: {
                        dom: $('.character li'),
                        offset: [],
                        show: false,
                    }
                },
                s3: {
                    title: {
                        dom: $('.sec3 .stext > div'),
                        offset: [],
                        show: false,
                    },
                    section: {
                        dom: $('.sec3 .contents > div'),
                        offset: [],
                        show: false,
                    },
                    imgTit: {
                        dom: $('.sec3 .imgWrap .imgTit .effect'),
                        offset: [],
                        show: false,
                    },
                    descTit: {
                        dom: $('.sec3 .desc .desc-tit'),
                        offset: [],
                        show: false,
                    },
                    descCont: {
                        dom: $('.sec3 .desc .textWrap > div'),
                        offset: [],
                        show: false,
                    },
                    siteBtn: {
                        dom: $('.sec3 .desc .btnWrap .btn'),
                        offset: [],
                        show: false,
                    }
                },
                s4: {
                    title: {
                        dom: $('.sec4 .stext > div'),
                        offset: [],
                        show: false,
                    },
                    ani: {
                        dom: $('.sec4 .contents .animation'),
                        offset: [],
                        show: false,
                    }
                },
                s5: {
                    title: {
                        dom: $('.sec5 .stext > div'),
                        offset: [],
                        show: false,
                    },
                    js: {
                        dom: $('.sec5 .js li'),
                        offset: [],
                        show: false,
                    },
                },
                s6: {
                    title: {
                        dom: $('.sec6 .stext > div'),
                        offset: [],
                        show: false,
                    },
                    js: {
                        dom: $('.sec6 .js li'),
                        offset: [],
                        show: false,
                    },
                },
                s7: {
                    title: {
                        dom: $('.sec7 .stext > div'),
                        offset: [],
                        show: false,
                    }
                },
                s8: {
                    title: {
                        dom: $('.sec8 .stext > div .text'),
                        offset: [],
                        show: false,
                    },
                    talk: {
                        dom: $('.sec8 .talk > div'),
                        offset: [],
                        show: false,
                    }
                },
                s9: {
                    title: {
                        dom: $('.sec9 .stext > div'),
                        offset: [],
                        show: false,
                    }
                }

            }
            let curJs = 0;
            const s2DescInit = () => {
                $('.sec2 .desc > div').each(index => {
                    let text1 = $('.sec2 .desc > div').eq(index).html();
                    text1 = '<span>' + text1 + '</span>';
                    $('.sec2 .desc > div').eq(index).html(text1);
                });
            }

            const s3DescTitInit = () => {
                $('.sec3 .desc .desc-tit').each(index => {
                    let text2 = $('.sec3 .desc .desc-tit').eq(index).text().split('').join('</span><span>');
                    text2 = '<span>' + text2 + '</span>'
                    console.log('text2', text2);
                    $('.sec3 .desc .desc-tit').eq(index).html(text2);
                })
            }

            const s3DescContInit = () => {
                $('.sec3 .desc .textWrap > div').each(index => {
                    let text3 = $('.sec3 .desc .textWrap > div').eq(index).text();
                    text3 = '<span>' + text3 + '</span>';
                    $('.sec3 .desc .textWrap > div').eq(index).html(text3);
                })
            }

            const s8ISayInit = () => {
                $('.sec8 .talk > div').each(index => {
                    let text7 = $('.sec8 .talk > div').eq(index).html();
                    text7 = '<span>' + text7 + '</span>';
                    $('.sec8 .talk > div').eq(index).html(text7);
                })
            }


            // resize�� 媛� �뱀뀡 �붿냼蹂� offset媛� 珥덇린�� �섎뒗 �⑥닔
            const initialize = (eventObj) => {
                const { dom, offset } = eventObj;
                offset.length = 0;

                if (dom.selector === '.sec2 .desc > p') {
                    dom.find('.text').each((index, element) => {
                        const ele = $(element);
                        const offsetTop = ele.offset().top;
                        offset.push(offsetTop);
                    })
                } else {
                    dom.each((index, element) => {
                        const ele = $(element);
                        const offsetTop = ele.offset().top;
                        offset.push(offsetTop);
                    });
                }
            }

            // 珥덇린媛� 
            let gWidthSize = $(window).width();
            let gHeightSize = $(window).height();
            let imgWidth = $('.tit-img').width() + 1.5;
            $('.tit-img .bar').css({ 'width': imgWidth });
            initialize(effect.s1.title); // sec1 title
            initialize(effect.s2.title); // sec2 title
            s2DescInit(); // sec2 desc 媛� �⑥뼱 span�쇰줈 媛먯떥以�.
            s3DescTitInit(); // sec3 desc-tit 媛� �⑥뼱 span�쇰줈 媛먯떥以�.
            s3DescContInit(); // sec3 testWrap�� div �덉쓽 �댁슜 span�쇰줈 媛먯떥以�.
            s8ISayInit(); // sec7 talk p�� �먯떇�ㅼ씤 div �덉쓽 �댁슜�� span�쇰줈 媛먯떥以�.
            initialize(effect.s2.desc); // sec2 desc
            initialize(effect.s2.character); // sec2 character
            initialize(effect.s3.title); // sec3 title
            initialize(effect.s3.section); // sec3 cont
            initialize(effect.s3.imgTit); // sec3 imgTit
            initialize(effect.s3.descTit); // sec3 descTit
            initialize(effect.s3.descCont); // sec3 descCont
            initialize(effect.s3.siteBtn); // sec3 siteBtn
            initialize(effect.s4.title); // sec4 title
            initialize(effect.s4.ani); // sec4 ani
            initialize(effect.s5.title); // sec5 title
            initialize(effect.s5.js); // sec5 title
            initialize(effect.s7.title); // sec6 title
            initialize(effect.s8.title); // sec7 title
            initialize(effect.s8.talk); // sec7 talk
            // initialize(effect.s8.title); // sec8 title
            // console.log(effect.s3.title);

            // console.log(effect.s3.title);

            // 濡쒕뵫�꾨즺�� �대옒�� 異붽�濡� 蹂�寃� �� 寃�
            setTimeout(() => {
                $('.sec1 .stext .text').addClass('show');
                $('.sec1 .sub .job').addClass('show');
            }, 500);

            // window.resize
            $(window).resize(() => {
                gWidthSize = $(window).width();
                gHeightSize = $(window).height();

                s1TitleResize(); // wWidth 768 �댄븯�� mediaquery泥섎읆 �섍쾶
                s4AniResize();
                //window size蹂�寃쎌쑝濡� 諛붾�뚮뒗 offset媛� �ㅼ떆 ����
                initialize(effect.s1.title); // sec1 title
                initialize(effect.s2.title); // sec2 title
                initialize(effect.s2.desc); // sec2 desc
                initialize(effect.s2.character); // sec2 character
                initialize(effect.s3.title); // sec3 title
                initialize(effect.s3.section); // sec3 cont
                initialize(effect.s3.imgTit); // sec3 imgTit 
                initialize(effect.s3.descTit); // sec3 descTit   
                initialize(effect.s3.descCont); // sec3 descCont   
                initialize(effect.s3.siteBtn); // sec3 siteBtn
                initialize(effect.s4.title); // sec4 title
                initialize(effect.s5.title); // sec5 title
                initialize(effect.s5.js); // sec5 js
                initialize(effect.s7.title); // sec6 title
                initialize(effect.s8.title); // sec6 title
                initialize(effect.s8.talk); // sec7 talk
                // initialize(effect.s8.title); // sec8 title

                s1BarProgress(); // s1 bar
                s3BarProgress(effect.s3.section); // s3 bar
                navProgress(); // nav responsive
            });

            $(window).scroll(() => {
                //sec2 character
                s1TitleScroll();
                s2TitleScroll(effect.s2.title);
                s2CharScroll(effect.s2.character);
                s2DescScroll(effect.s2.desc);
                s3TitleScroll(effect.s3.title);
                s3ImgScroll(effect.s3.section);
                s3ImgTitScroll(effect.s3.imgTit);
                s3DescTitScroll(effect.s3.descTit);
                s3DescContScroll(effect.s3.descCont);
                s3SiteBtnScroll(effect.s3.siteBtn);
                s4TitleScroll(effect.s4.title);
                s4AniScroll(effect.s4.ani);
                s5TitleScroll(effect.s5.title);
                s5JsScroll(effect.s5.js);
                s7TitleScroll(effect.s7.title);
                s8TitleScroll(effect.s8.title);
                s8TalkScroll(effect.s8.talk);
                // s8TitleScroll(effect.s8.title);

                s1BarProgress();
                s3BarProgress(effect.s3.section);
                // currMenuCheck();
            });

            const s5JsScroll = (eventObj) => {
                const { dom, offset, show } = eventObj;
                if (!show) {
                    const sct = $(window).scrollTop();
                    dom.each((index, element) => {
                        let eleOffset = offset[index];
                        if (gWidthSize > 768) {
                            if (sct - eleOffset + gHeightSize - gHeightSize * 0.14 > 0) {
                                let text = dom.eq(index).find('.text');
                                let tl = new TimelineMax();
                                if (index < dom.length - 1) {
                                    let line = dom.eq(index).find('.line');
                                    tl.to(line, .6, { scaleX: 1, ease: Power0.easeNone });
                                    tl.to(text, .4, { y: 0, ease: Power0.easeNone });
                                } else {
                                    let line = dom.eq(index).find('.line');
                                    let bline = dom.eq(index).find('.bline');
                                    let liHeight = dom.eq(0).height();
                                    bline.css({ 'top': 'liHeight' });
                                    tl.to(line, .6, { scaleX: 1, ease: Power0.easeNone });
                                    tl.to(text, .4, { y: 0, ease: Power0.easeNone });
                                    tl.to(bline, .6, { scaleX: 1, ease: Power0.easeNone });
                                    effect.s2.character.show = true;
                                }
                            }
                        } else {
                            if (sct - eleOffset + gHeightSize - gHeightSize * 0.1 > 0) {
                                let cHeight = dom.height();
                                let text = dom.eq(index).find('.text');
                                let tl = new TimelineMax();
                                if (index < dom.length - 1) {
                                    let line = dom.eq(index).find('.line');
                                    tl.to(line, .6, { scaleX: 1, ease: Power0.easeNone });
                                    tl.to(text, .4, { y: 0, ease: Power0.easeNone });
                                } else {
                                    let line = dom.eq(index).find('.line');
                                    let bline = dom.eq(index).find('.bline');
                                    let liHeight = dom.eq(0).height();
                                    bline.css({ 'top': 'liHeight' });
                                    tl.to(line, .6, { scaleX: 1, ease: Power0.easeNone });
                                    tl.to(text, .4, { y: 0, ease: Power0.easeNone });
                                    tl.to(bline, .6, { scaleX: 1, ease: Power0.easeNone });
                                    effect.s2.character.show = true;
                                }
                            }
                        }
                    });
                }
            }



            const s1TitleResize = () => {
                const sct = $(window).scrollTop();
                if (gWidthSize < 768) {
                    TweenMax.to('.sec1 .stext .r1', 1.5, {
                        x: 0,
                        ease: Power4.easeOut,
                    });
                    TweenMax.to('.sec1 .stext .r2', 1.5, {
                        x: 0,
                        ease: Power4.easeOut,
                    });
                    TweenMax.to('.sec1 .stext .r3', 1.5, {
                        x: 0,
                        ease: Power4.easeOut,
                    });
                    TweenMax.to('.sec1 .stext .l1', 0.8, {
                        x: 0,
                        ease: Power4.easeOut,
                    });
                }
            }

            const s4AniResize = () => {
                const sct = $(window).scrollTop();
                if (gWidthSize < 768) {
                    TweenMax.to('.sec4 .contents .top', 0.1, {
                        x: 0,
                    });
                    TweenMax.to('.sec4 .contents .bot', 0.1, {
                        x: 0,
                    });
                    console.log('�뚯븘��');
                }
            }

            const s1TitleScroll = () => {
                const sct = $(window).scrollTop();
                if (gWidthSize > 768) {
                    if (sct > 0) {
                        TweenMax.to('.sec1 .stext .r1', 1.5, {
                            x: (sct),
                            ease: Power4.easeOut,
                        });
                        TweenMax.to('.sec1 .stext .r2', 1.5, {
                            x: (sct * 0.35),
                            ease: Power4.easeOut,
                        });
                        TweenMax.to('.sec1 .stext .r3', 1.5, {
                            x: (sct * 0.75),
                            ease: Power4.easeOut,
                        });
                        TweenMax.to('.sec1 .stext .l1', 0.8, {
                            x: -(sct * 0.4),
                            ease: Power4.easeOut,
                        });
                    }
                }
            }

            const s2TitleScroll = (eventObj) => {
                const { dom, offset, show } = eventObj;
                const sct = $(window).scrollTop();
                const text1 = dom.find('.text1');
                const text2 = dom.find('.text2');
                const text3 = dom.find('.text3');
                let eleOffset = offset;
                if (!show) {
                    if (gWidthSize > 768) {
                        if (sct - eleOffset + gHeightSize > 0) {
                            TweenMax.to(text1, 1, { y: 0, opacity: 1, ease: Power0.easeNone });
                            TweenMax.to(text2, 1, { y: 0, opacity: 1, ease: Power0.easeNone });
                            TweenMax.to(text3, 1, { y: 0, opacity: 1, ease: Power0.easeNone });
                            effect.s2.title.show = true;
                        }
                    } else {
                        if (sct - eleOffset + gHeightSize > 0) {
                            TweenMax.to(text1, 1, { y: 0, opacity: 1, ease: Power0.easeNone });
                            TweenMax.to(text2, 1, { y: 0, opacity: 1, ease: Power0.easeNone });
                            TweenMax.to(text3, 1, { y: 0, opacity: 1, ease: Power0.easeNone });
                            effect.s2.title.show = true;
                        }
                    }
                }

            }

            const s2DescScroll = (eventObj) => {
                const { dom, offset, show } = eventObj;
                const sct = $(window).scrollTop();
                const wHeight = $(window).height();
                dom.each(index => {
                    let eleoffset = offset[index];
                    if (gWidthSize > 768) {
                        if (sct - eleoffset + gHeightSize > 0) {
                            let text = dom.eq(index).find('span');
                            TweenMax.to(text, .7, { y: 0, opacity: 1, ease: Power0.easeNone, delay: .3 });
                            if ((dom.length - 1) === index) {
                                effect.s2.desc.show = true;
                            }
                        }
                    } else {
                        if (sct - eleoffset + gHeightSize > 0) {
                            let text = dom.eq(index).find('span');
                            TweenMax.to(text, .7, { y: 0, opacity: 1, ease: Power0.easeNone, delay: .3 });
                            if ((dom.length - 1) === index) {
                                effect.s2.desc.show = true;
                            }
                        }
                    }
                })
            }

            const s2CharScroll = (eventObj) => {
                const { dom, offset, show } = eventObj;
                if (!show) {
                    const sct = $(window).scrollTop();
                    dom.each((index, element) => {
                        let eleOffset = offset[index];
                        if (gWidthSize > 768) {
                            if (sct - eleOffset + gHeightSize - gHeightSize * 0.14 > 0) {
                                let text = dom.eq(index).find('.text');
                                let tl = new TimelineMax();
                                if (index < dom.length - 1) {
                                    let line = dom.eq(index).find('.line');
                                    tl.to(line, .6, { scaleX: 1, ease: Power0.easeNone });
                                    tl.to(text, .4, { y: 0, ease: Power0.easeNone });
                                } else {
                                    let line = dom.eq(index).find('.line');
                                    let bline = dom.eq(index).find('.bline');
                                    let liHeight = dom.eq(0).height();
                                    bline.css({ 'top': 'liHeight' });
                                    tl.to(line, .6, { scaleX: 1, ease: Power0.easeNone });
                                    tl.to(text, .4, { y: 0, ease: Power0.easeNone });
                                    tl.to(bline, .6, { scaleX: 1, ease: Power0.easeNone });
                                    effect.s2.character.show = true;
                                }
                            }
                        } else {
                            if (sct - eleOffset + gHeightSize - gHeightSize * 0.1 > 0) {
                                let cHeight = dom.height();
                                let text = dom.eq(index).find('.text');
                                let tl = new TimelineMax();
                                if (index < dom.length - 1) {
                                    let line = dom.eq(index).find('.line');
                                    tl.to(line, .6, { scaleX: 1, ease: Power0.easeNone });
                                    tl.to(text, .4, { y: 0, ease: Power0.easeNone });
                                } else {
                                    let line = dom.eq(index).find('.line');
                                    let bline = dom.eq(index).find('.bline');
                                    let liHeight = dom.eq(0).height();
                                    bline.css({ 'top': 'liHeight' });
                                    tl.to(line, .6, { scaleX: 1, ease: Power0.easeNone });
                                    tl.to(text, .4, { y: 0, ease: Power0.easeNone });
                                    tl.to(bline, .6, { scaleX: 1, ease: Power0.easeNone });
                                    effect.s2.character.show = true;
                                }
                            }
                        }
                    });
                }
            }

            const s3TitleScroll = (eventObj) => {
                const { dom, offset, show } = eventObj;
                if (!show) {
                    const sct = $(window).scrollTop();
                    dom.each((index, element) => {
                        let eleOffset = offset[index];
                        if (gWidthSize > 768) {
                            if (sct - eleOffset + gHeightSize - gHeightSize * 0.14 > 0) {
                                // console.log(sct - eleOffset + gHeightSize - gHeightSize * 0.14);
                                // console.log('�ㅼ뼱��');
                                let text = dom.eq(index).find('.text');
                                TweenMax.to(text, .7, { y: 0, opacity: 1, ease: Power0.easeNone });
                                if (text.attr('class') === 'text text2') {
                                    effect.s3.title.show = true;
                                }
                            }
                        } else {
                            if (sct - eleOffset + gHeightSize - gHeightSize * 0.14 > 0) {
                                // console.log('�ㅼ뼱��');
                                let text = dom.eq(index).find('.text');
                                TweenMax.to(text, .7, { y: 0, opacity: 1, ease: Power0.easeNone });
                                // if(text.attr('class') === 'text text2'){
                                //     effect.s3.title.show = true;
                                // }
                            }
                        }

                    });
                }
            }

            const s3ImgScroll = (eventObj) => {
                const { dom, offset, show } = eventObj;
                if (!show) {
                    const sct = $(window).scrollTop();
                    dom.each((index, element) => {
                        let eleOffset = offset[index];
                        if (gWidthSize > 768) {
                            if (sct - eleOffset + gHeightSize - gHeightSize * 0.14 > 0) {
                                // console.log('img �ㅼ뼱��');
                                let imgWrap = dom.eq(index).find('.imgWrap');
                                TweenMax.to(imgWrap, 2, { backgroundColor: '#21252c', ease: Expo.easeOut });
                                TweenMax.to(imgWrap.find('img'), 2.5, { opacity: 1, ease: Power0.easeNone });
                                if (dom.eq(index).attr('class') === 'miero') {
                                    effect.s3.section.show = true;
                                }
                            }
                        } else {
                            //768 �댄븯�쇰븣 �대�吏� �④낵 以꾧쾬
                        }
                    });
                }
            }

            const s3ImgTitScroll = (eventObj) => {
                const { dom, offset, show } = eventObj;
                if (!show) {
                    const sct = $(window).scrollTop();
                    dom.each((index, element) => {
                        let eleOffset = offset[index];
                        if (gWidthSize > 768) {
                            if (sct - eleOffset + gHeightSize - gHeightSize * 0.05 > 0) {
                                // console.log(sct - eleOffset + gHeightSize - gHeightSize * 0.14);
                                // console.log('�ㅼ뼱��');
                                let text = dom.eq(index);
                                TweenMax.to(text, .5, { y: 0, opacity: 1, ease: Power0.easeNone });
                                if (text.attr('class') === 'effect last') {
                                    effect.s3.title.show = true;
                                }
                            }
                        } else {
                            if (sct - eleOffset + gHeightSize - gHeightSize * 0.05 > 0) {
                                // console.log('�ㅼ뼱��');
                                let text = dom.eq(index);
                                TweenMax.to(text, .5, { y: 0, opacity: 1, ease: Power0.easeNone });
                                if (text.attr('class') === 'effect last') {
                                    effect.s3.title.show = true;
                                }
                            }
                        }

                    });
                }
            }

            const s3DescTitScroll = (eventObj) => {
                const { dom, offset, show } = eventObj;
                if (!show) {
                    const sct = $(window).scrollTop();
                    dom.each((index, element) => {
                        let eleOffset = offset[index];
                        if (gWidthSize > 768) {
                            if (sct - eleOffset + gHeightSize - gHeightSize * 0.05 > 0) {
                                // console.log(sct - eleOffset + gHeightSize - gHeightSize * 0.14);
                                // console.log('�ㅼ뼱��');
                                let text = dom.eq(index).find('span');
                                let tl = new TimelineMax();
                                tl.staggerTo(text, 1, { ease: Back.easeOut.config(1.7), opacity: 1, y: 0 }, 0.05);
                                if ((dom.length - 1) === index) {
                                    effect.s3.descTit.show = true;
                                }
                            }
                        } else {
                            if (sct - eleOffset + gHeightSize - gHeightSize * 0.05 > 0) {
                                // console.log('�ㅼ뼱��');
                                let text = dom.eq(index).find('span');
                                let tl = new TimelineMax();
                                tl.staggerTo(text, 1, { ease: Back.easeOut.config(1.7), opacity: 1, y: 0 }, 0.05);
                                if ((dom.length - 1) === index) {
                                    effect.s3.descTit.show = true;
                                }
                            }
                        }

                    });
                }
            }

            // const currMenuCheck = () => {
            //     const sct = $(window).scrollTop();
            //     if(gWidthSize < 768){
            //         if(sct + gHeightSize/2 > $('.sec9').offset().top ){
            //             $('.menu ul li a').removeClass('on');
            //             $('.menu ul li ').eq(7).children('a').addClass('on');
            //         }else if(sct + gHeightSize/2 > $('.sec6').offset().top){
            //             $('.menu ul li a').removeClass('on');
            //             $('.menu ul li ').eq(6).children('a').addClass('on');
            //         }else if(sct + gHeightSize/2 > $('.sec5').offset().top){
            //             $('.menu ul li a').removeClass('on');
            //             $('.menu ul li ').eq(5).children('a').addClass('on');
            //         }else if( sct + gHeightSize/2 > $('.sec4').offset().top){
            //             $('.menu ul li a').removeClass('on');
            //             $('.menu ul li ').eq(4).children('a').addClass('on');
            //         }else if( sct + gHeightSize/2 > $('.sec3').offset().top){
            //             $('.menu ul li a').removeClass('on');
            //             $('.menu ul li ').eq(3).children('a').addClass('on');
            //         }else if( sct + gHeightSize/2 > $('.sec2').offset().top){
            //             $('.menu ul li a').removeClass('on');
            //             $('.menu ul li ').eq(2).children('a').addClass('on');
            //         }else if( sct + gHeightSize/2 > $('.sec1').offset().top){
            //             $('.menu ul li a').removeClass('on');
            //             $('.menu ul li ').eq(1).children('a').addClass('on');
            //         }
            //     }

            // }

            const s3DescContScroll = (eventObj) => {
                const { dom, offset, show } = eventObj;
                const sct = $(window).scrollTop();
                const wHeight = $(window).height();
                dom.each(index => {
                    let eleoffset = offset[index];
                    if (gWidthSize > 768) {
                        if (sct - eleoffset + gHeightSize > 0) {
                            let text = dom.eq(index).find('span');
                            TweenMax.to(text, .7, { y: 0, opacity: 1, ease: Power0.easeNone, delay: .3 });
                            if ((dom.length - 1) === index) {
                                effect.s3.descCont.show = true;
                            }
                        }
                    } else {
                        if (sct - eleoffset + gHeightSize > 0) {
                            let text = dom.eq(index).find('span');
                            TweenMax.to(text, .7, { y: 0, opacity: 1, ease: Power0.easeNone, delay: .3 });
                            if ((dom.length - 1) === index) {
                                effect.s3.descCont.show = true;
                            }
                        }
                    }
                })
            }

            const s3SiteBtnScroll = (eventObj) => {
                const { dom, offset, show } = eventObj;
                if (!show) {
                    const sct = $(window).scrollTop();
                    dom.each((index, element) => {
                        let eleOffset = offset[index];
                        if (sct - eleOffset + gHeightSize > 0) {
                            // console.log('�ㅼ뼱��');
                            let text = dom.eq(index);
                            TweenMax.to(text, .6, { y: 0, opacity: 1, ease: Power0.easeNone });
                            setTimeout(() => {
                                text.addClass('show');
                            }, 600);
                            if ((dom.length - 1) === index) {
                                effect.s3.siteBtn.show = true;
                            }
                        }
                    });
                }
            }

            const s4TitleScroll = (eventObj) => {
                const { dom, offset, show } = eventObj;
                if (!show) {
                    const sct = $(window).scrollTop();
                    dom.each((index, element) => {
                        let eleOffset = offset[index];
                        if (sct - eleOffset + gHeightSize - gHeightSize * 0.14 > 0) {
                            // console.log('�ㅼ뼱��');
                            let text = dom.eq(index).find('.text1');
                            TweenMax.to(text, .6, { y: 0, opacity: 1, ease: Power0.easeNone });
                            if ((dom.length - 1) === index) {
                                effect.s4.title.show = true;
                            }
                        }
                    });
                }
            }

            const s4AniScroll = (eventObj) => {
                const { dom, offset, show } = eventObj;
                const sct = $(window).scrollTop();
                if (gWidthSize > 768) {
                    if (!show) {
                        dom.each((index, element) => {
                            let ele = $(element);
                            let eleOffset = offset[index];
                            if (sct - eleOffset + gHeightSize - gHeightSize * 0.14 > 0) {
                                // console.log('�ㅼ뼱��');
                                // let circle = ele;
                                TweenMax.to(ele, .6, { y: 0, opacity: 1, ease: Power0.easeNone });
                                if ((dom.length - 1) === index) {
                                    effect.s4.ani.show = true;
                                    console.log(effect.s4.ani.show);
                                }
                            }
                        });
                    } else {
                        //�좊땲硫붿씠�� �ㅽ뻾��
                        let value = (sct - $('.sec4 .contents').offset().top) * 0.3;
                        TweenMax.to('.sec4 .top', .8, { x: value, ease: Power0.easeOut });
                        TweenMax.to('.sec4 .bot', .8, { x: -value, ease: Power0.easeOut });
                    }
                } else {
                    if (!show) {
                        dom.each((index, element) => {
                            let ele = $(element);
                            let eleOffset = offset[index];
                            if (sct - eleOffset + gHeightSize - gHeightSize * 0.14 > 0) {
                                // console.log('�ㅼ뼱��');
                                // let circle = ele;
                                TweenMax.to(ele, .6, { y: 0, opacity: 1, ease: Power0.easeNone });
                                if ((dom.length - 1) === index) {
                                    effect.s4.ani.show = true;
                                }
                            }
                        });
                    }
                }
            }

            const s5TitleScroll = (eventObj) => {
                const { dom, offset, show } = eventObj;
                if (!show) {
                    const sct = $(window).scrollTop();
                    dom.each((index, element) => {
                        let eleOffset = offset[index];
                        if (sct - eleOffset + gHeightSize - gHeightSize * 0.14 > 0) {
                            // console.log('�ㅼ뼱��');
                            let text = dom.eq(index).find('.text');
                            TweenMax.to(text, .6, { y: 0, opacity: 1, ease: Power0.easeNone });
                            effect.s4.title.show = true;
                        }
                    });
                }
            }

            const s7TitleScroll = (eventObj) => {
                const { dom, offset, show } = eventObj;
                if (!show) {
                    const sct = $(window).scrollTop();
                    dom.each((index, element) => {
                        let eleOffset = offset[index];
                        if (sct - eleOffset + gHeightSize - gHeightSize * 0.14 > 0) {
                            // console.log('�ㅼ뼱��');
                            let text = dom.eq(index).find('.text');
                            TweenMax.to(text, .6, { y: 0, opacity: 1, ease: Power0.easeNone });
                            if ((dom.length - 1) === index) {
                                effect.s6.title.show = true;
                            }
                        }
                    });
                }
            }

            const s8TitleScroll = (eventObj) => {
                const { dom, offset, show } = eventObj;
                if (!show) {
                    const sct = $(window).scrollTop();
                    dom.each((index, element) => {
                        let eleOffset = offset[index];
                        if (gWidthSize > 768) {
                            if (sct - eleOffset + gHeightSize - gHeightSize * 0.14 > 0) {
                                // console.log(sct - eleOffset + gHeightSize - gHeightSize * 0.14);
                                // console.log('�ㅼ뼱��');
                                // let text = dom.eq(index);
                                TweenMax.staggerTo(dom, .7, { y: 0, opacity: 1, ease: Power0.easeNone }, 0.5);

                            }
                        } else {
                            if (sct - eleOffset + gHeightSize - gHeightSize * 0.14 > 0) {
                                // console.log('�ㅼ뼱��');
                                TweenMax.staggerTo(dom, .7, { y: 0, opacity: 1, ease: Power0.easeNone }, 0.5);
                                // if(text.attr('class') === 'text text2'){
                                //     effect.s3.title.show = true;
                                // }
                            }
                        }

                    });
                }
            }

            const s8TalkScroll = (eventObj) => {
                const { dom, offset, show } = eventObj;
                const sct = $(window).scrollTop();
                const wHeight = $(window).height();
                dom.each(index => {
                    let eleoffset = offset[index];
                    if (gWidthSize > 768) {
                        if (sct - eleoffset + gHeightSize > 0) {
                            let text = dom.eq(index).find('span');
                            TweenMax.to(text, .7, { y: 0, opacity: 1, ease: Power0.easeNone, delay: .3 });
                            if ((dom.length - 1) === index) {
                                effect.s7.talk.show = true;
                            }
                        }
                    } else {
                        if (sct - eleoffset + gHeightSize > 0) {
                            let text = dom.eq(index).find('span');
                            TweenMax.to(text, .7, { y: 0, opacity: 1, ease: Power0.easeNone, delay: .3 });
                            if ((dom.length - 1) === index) {
                                effect.s7.talk.show = true;
                            }
                        }
                    }
                })
            }

            const navProgress = () => {
                // 諛섏쓳��
                // nav
                if (gWidthSize + 17 > 768) {
                    $('#vNav .nav .menu ul').css('display', 'block');
                    $('#vNav .nav .menu').css('display', 'block');
                } else {
                    $('#vNav .nav .menu').css('display', 'none');
                    $('#vNav .nav .menu ul').css('display', 'none');
                }
            }

            const s1BarProgress = () => {
                let sct = $(window).scrollTop();
                let imgHeight = $('.tit-img img').height();
                let imgWidth = $('.tit-img').width();
                let imgOffsetTop = $('.tit-img').offset().top;
                $('.tit-img .bar').css({ 'width': imgWidth + 1.5 });

                if (gWidthSize > 768) {
                    if (sct >= (imgOffsetTop + imgHeight) / 2) {
                        $('.tit-img .bar').css({ 'display': 'none' });
                    } else {
                        $('.tit-img .bar').css({ 'display': 'block' });
                    }
                } else {
                    $('.tit-img .bar').css({ 'display': 'none' });
                }
            }

            const s3BarProgress = (eventObj) => {
                const { dom, offset } = eventObj;
                let sct = $(window).scrollTop();
                let sectionHeight = $('.sec3 .contents > div').height();
                let imgHeight = $('.sec3 .imgWrap img').height();
                let imgWidth = $('.sec3 .imgWrap img').width() + 1;
                let imgOffsetTop = $('.sec3 .imgWrap img').offset().top;
                $('.sec3 .imgWrap .bar').css({ 'width': imgWidth });

                if (gWidthSize > 768) {
                    $('.sec3 .imgWrap .bar').each((index, element) => {
                        const ele = $(element);
                        if ((sct - offset[index] + gHeightSize) > 0 && (sct - offset[index] + gHeightSize) < sectionHeight + 100) {
                            ele.css({ 'display': 'block' });
                        } else if (sct >= (offset[index] + imgHeight) / 2) {
                            ele.css({ 'display': 'none' });
                        }
                    })
                } else {
                    // console.log('�묒븘吏�');
                    $('.standard .imgWrap .bar').css({ 'display': 'none' });
                    $('.responsive .imgWrap .bar').css({ 'display': 'none' });
                    $('.mega .imgWrap .bar').css({ 'display': 'none' });
                    $('.miero .imgWrap .bar').css({ 'display': 'none' });
                }

            }

            //mobile menu slide
            $('.m-menu a').click(e => {
                e.preventDefault();
                $('#vNav .nav .menu').slideDown(300);
                $('html').css("overflow", "hidden");
                setTimeout(() => {
                    $('#vNav .nav .menu ul').slideDown(400);
                }, 400);
            });

            $('#vNav .nav .menu .m-close').click(e => {
                e.preventDefault();
                $('#vNav .nav .menu').slideUp(300);
                $('html').css("overflow", "visible");
                setTimeout(() => {
                    $('#vNav .nav .menu ul').slideUp(400);
                }, 400);
            });

            $('.menu ul li a').click(function (e) {
                e.preventDefault();
                $('.menu ul li a').removeClass('on');
                $(this).addClass('on');
                let index = $(this).parent().index();
                if (gWidthSize > 768) {
                    if (!(index === 0)) {
                        $('#load2').fadeIn(500);
                        setTimeout(() => {
                            if (index === 1) {
                                let secOffset = $('.section').eq(index).offset().top;
                                $('body, html').animate({
                                    scrollTop: secOffset
                                })
                            } else if (index === 6) {
                                let secOffset = $('.section').eq(index + 2).offset().top;
                                $('body, html').animate({
                                    scrollTop: secOffset
                                })
                            } else {
                                let secOffset = $('.section').eq(index).offset().top;
                                $('body, html').animate({
                                    scrollTop: secOffset
                                })
                            }
                        }, 500);

                        setTimeout(() => {
                            $('#load2').fadeOut(500);
                        }, 2200);
                    } else if (index === 1) {
                        $('.standard .imgWrap .bar').css({ 'display': 'none' });
                        $('.responsive .imgWrap .bar').css({ 'display': 'none' });
                        $('.mega .imgWrap .bar').css({ 'display': 'none' });
                        $('.miero .imgWrap .bar').css({ 'display': 'none' });
                    }
                } else {
                    if (!(index === 0)) {
                        if (index === 6) {
                            let secOffset = $('.section').eq(8).offset().top;
                            $('body, html').animate({
                                scrollTop: secOffset
                            })
                        } else {
                            let secOffset = $('.section').eq(index).offset().top;
                            $('body, html').animate({
                                scrollTop: secOffset
                            })
                        }
                    }
                    setTimeout(() => {
                        $('#vNav .nav .menu').slideUp(300);
                        $('html').css("overflow", "visible");
                        setTimeout(() => {
                            $('#vNav .nav .menu ul').slideUp(400);
                        }, 400);
                    }, 500);
                }
            });


            $(document).mousemove(e => {
                if (gWidthSize > 380) {
                    const pageX = e.pageX;
                    const pageY = e.pageY;
                    let imgOffsetLeft = $('.sec1-img').offset().left;
                    let imgWidth = $('.sec1-img').width();
                    let imgOffsetTop = $('.sec1-img').offset().top;
                    if (pageX <= $('.sec1 .icon .eye-white').offset().left) {
                        let eyeX = -$('.sec1 .icon .eye-white').width() / 2.5;
                        TweenMax.to('.sec1 .icon .eye-apple', .5, { x: eyeX });
                    }

                    if (pageX >= $('.sec1 .icon .eye-white').offset().left + $('.sec1 .icon .eye-white').width()) {
                        let eyeX = $('.sec1 .icon .eye-white').width() / 6;
                        TweenMax.to('.sec1 .icon .eye-apple', .5, { x: eyeX });
                    }

                    if (pageY <= $('.sec1 .icon .eye-white').offset().top) {
                        let eyeY = -$('.sec1 .icon .eye-white').height() / 2.5;
                        TweenMax.to('.sec1 .icon .eye-apple', .5, { y: eyeY });
                    }

                    if (pageY >= $('.sec1 .icon .eye-white').offset().top + $('.sec1 .icon .eye-white').height()) {
                        let eyeY = $('.sec1 .icon .eye-white').height() / 1000;
                        TweenMax.to('.sec1 .icon .eye-apple', .5, { y: eyeY });
                    }
                }

                const pageX = e.pageX;
                const pageY = e.pageY;
                const pointer = $('#pointer .circle');
                for (let i = 0; i < pointer.length; i++) {
                    TweenMax.to(pointer.eq(i), 1.5, { left: pageX + i * 2.5, top: pageY + i * 2.5, ease: Expo.easeOut, delay: i * 0.05 });
                }
            });

            $('.sec5 .js .menu li').mouseover(function () {
                let index = $(this).index();
                $('.sec5 .js .cont > div').stop().fadeOut();
                $('.sec5 .js .cont > div').eq(index).stop().fadeIn();
            });


            $('.sec1 .icon').mouseover(() => {
                $('.sec1 .icon .eye-white').attr('src', './assets/img/eye-closed.png');
                $('.sec1 .icon .eye-white').css('height', '0.5vw');
                $('.sec1 .icon .eye-apple').css('display', 'none');
            }).mouseout(() => {
                $('.sec1 .icon .eye-white').attr('src', './assets/img/eye-white.png');
                $('.sec1 .icon .eye-white').css('height', '2.45vw');
                $('.sec1 .icon .eye-apple').css('display', 'block');
            });

            function counter() {
                if ($('.skill .skill-box .num').size()) {
                    let count = $('.skill .skill-box .num');

                    count.each(function () {
                        let $this = $(this); // $ jquery 蹂���
                        $this.data('target', parseInt($this.html()));
                        $this.data('counted', false);
                        $this.html('0');
                    });

                    $(window).on('scroll', function () {
                        count.each(function (i) {
                            let target = $(this);
                            if (!target.data('counted') && $(window).scrollTop() + $(window).height() >= target.offset().top) {
                                target.data('counted', true);
                                target.animate({
                                    dummy: 1 // �쒕쾲 二쇨쿋�ㅻ뒗 ��
                                }, {
                                    duration: 3000,
                                    step: function (now) { // �섎굹�� step
                                        var $this = $(this);
                                        var val = Math.round($this.data('target') * now);
                                        $this.html(val);
                                    },
                                    //easing: 'easeInOutQuart'
                                });

                                // easy pie
                                $('.pie').easyPieChart({
                                    // barColor: '#ff9900',
                                    // lineWidth: 3,
                                    // size: 300,
                                    // lineCap: 'butt',
                                    // animate: { duration: 3000, enabled: true }
                                    barColor: '#f57c00',
                                    trackColor: '#fff',
                                    scaleColor: false,
                                    lineWidth: 5,
                                    size: 250,
                                    lineCap: 'round',
                                    animate: { duration: 3000, enabled: true }
                                });
                            }
                        });
                    })
                }
            }
            counter();
        }, 700);


    } else if (mode === 'h') {
        clearInterval(modeCheck);
        console.log('媛�濡쒕え�쒖떎�됱쨷');
        $('#horizontal').css('display', 'block');
        $('#vertical').css('display', 'none');

        $('#pointer').css('display', 'none');
        let goLeft;
        $('body').css('overflow', 'visible');

        let gWidthSize = $(window).width();
        let gHeightSize = $(window).height();

        // �덉씠�꾩썐�� 媛�濡쒕줈 吏쒓퀬 洹� �덉씠�꾩썐�� 珥� 媛�濡쒓만�대� body�� height媛믪쑝濡� �댁＜�붽쾬.
        let lastScrollTop = 0;                       // �꾩옱 �ㅽ겕濡ㅺ컪( �쒖씪 留덉�留� �ㅽ겕濡� 媛� )
        let roadLength = $('#hContents').width();     // �꾩껜 媛�濡쒓컪
        $('body').css('height', roadLength);          // �뱀뀡 �꾩껜 媛�濡쒓컪�� body�� height 媛믪쑝濡� �좊떦

        const s2DescInit = () => {
            $('.hSec2 .descWrap > div').each(index => {
                let text1 = $('.hSec2 .descWrap > div').eq(index).html();
                text1 = '<span>' + text1 + '</span>';
                $('.hSec2 .descWrap > div').eq(index).html(text1);
            });
        }

        s2DescInit();

        $(window).resize(() => {
            gWidthSize = $(window).width();
            gHeightSize = $(window).height();

        });

        TweenMax.to('.hSec1 .text', 2, { delay: .5, opacity: 1, y: 0, ease: Power4.easeOut })
        TweenMax.to('.hSec1 .tit-img', 2, { delay: 1.2, opacity: 1, ease: Power4.easeOut })
        $(window).scroll(() => {
            let wScroll = $(window).scrollTop();
            let dHeight = $('body').height() - gHeightSize; // �꾩껜 body�� height媛� �먯꽌 �꾩옱 height媛� 鍮쇱쨲
            let wRoad = roadLength - gWidthSize;
            let step = wRoad / dHeight;
            // let goLeft = wScroll * step;
            goLeft = wScroll * step;

            console.log(goLeft);
            $('#hContents').css({ "transform": "translateX(" + -goLeft + "px)" });

            s1TitleScroll();

            console.log('goLeft', goLeft, 'h2offsetLeft', $('.hSec2').offset().left)
            if (goLeft > $('.hSec2').offset().left - gHeightSize / 2) {
                console.log('�좊땲硫붿씠�� �섏��쇳븿');
                let tl = new TimelineMax();
                tl.to('.hSec2 .text1', .5, { y: 0, opacity: 1, ease: Power4.easeOut });
                tl.to('.hSec2 .text2', .5, { y: 0, opacity: 1, ease: Power4.easeOut });
                tl.to('.hSec2 .text3', .5, { y: 0, opacity: 1, ease: Power4.easeOut });
                tl.to('.hSec2 .text4', .5, { y: 0, opacity: 1, ease: Power4.easeOut });
                tl.to('.hSec2 .text4', 1.5, { rotation: '30deg', color: '#ff9900', opacity: 1, color: '#ff9900', ease: Power4.easeOut });
                TweenMax.to('.hSec2 .desc-top span', 4, { delay: 1, y: 0, opacity: 1, ease: Power4.easeOut })

                TweenMax.to('.hSec2 .desc-bot span', 4, { delay: 1.5, y: 0, opacity: 1, ease: Power4.easeOut })


            }
        });

        const s1TitleScroll = () => {
            const sct = $(window).scrollTop();
            if (gWidthSize > 768) {
                if (sct > 0) {
                    TweenMax.to('.hSec1 .stext .r1', 1.5, {
                        x: (sct),
                        ease: Power4.easeOut,

                    });
                    TweenMax.to('.hSec1 .stext .r2', 1.5, {
                        x: (sct * 0.25),
                        ease: Power4.easeOut,
                    });
                    TweenMax.to('.hSec1 .stext .r3', 1.5, {
                        x: (sct * 0.55),
                        ease: Power4.easeOut,
                    });
                    TweenMax.to('.hSec1 .stext .r4', 1.5, {
                        x: -(sct * 0.7),
                        ease: Power4.easeOut,
                    });
                    TweenMax.to('.hSec1 .stext .l1', 0.8, {
                        x: -(sct * 0.2),
                        ease: Power4.easeOut,
                    });
                }
            }
        }

        $(document).mousemove(e => {
            const pageX = e.pageX;
            const pageY = e.pageY;
            let imgOffsetLeft = $('.hSec1 .sec1-img').offset().left;
            let imgWidth = $('.hSec1 .sec1-img').width();
            let imgOffsetTop = $('.hSec1 .sec1-img').offset().top;
            if (pageX <= $('.hSec1 .icon .eye-white').offset().left) {
                let eyeX = -$('.hSec1 .icon .eye-white').width() / 2.5;
                TweenMax.to('.hSec1 .icon .eye-apple', .5, { x: eyeX });
            }

            if (pageX >= $('.hSec1 .icon .eye-white').offset().left + $('.hSec1 .icon .eye-white').width()) {
                let eyeX = $('.hSec1 .icon .eye-white').width() / 6;
                TweenMax.to('.hSec1 .icon .eye-apple', .5, { x: eyeX });
            }

            if (pageY <= $('.hSec1 .icon .eye-white').offset().top) {
                let eyeY = -$('.hSec1 .icon .eye-white').height() / 2.5;
                TweenMax.to('.hSec1 .icon .eye-apple', .5, { y: eyeY });
            }

            if (pageY >= $('.hSec1 .icon .eye-white').offset().top + $('.hSec1 .icon .eye-white').height()) {
                let eyeY = $('.hSec1 .icon .eye-white').height() / 1000;
                TweenMax.to('.hSec1 .icon .eye-apple', .5, { y: eyeY });
            }
        })
    }
}






