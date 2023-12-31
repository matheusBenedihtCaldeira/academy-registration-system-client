import { Home as Pencil, Trash } from "lucide-react";
import Nav from "./components/nav";

export default function Home() {
    return (
        <div className="h-screen flex flex-col">
            <div className="flex flex-1">
                <Nav />
                <main className="flex-1 p-6">
                    <div className="flex items-center gap-3">
                        <a href="register">
                            <button className='w-40 h-11 rounded-full bg-slate-500 hover:bg-indigo-600  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"'>
                                Register
                            </button>
                        </a>
                    </div>
                    <div>
                        <ul role="list" className="divide-y divide-slate-600">
                            <li className="flex justify-between gap-x-6 py-5">
                                <div className="flex min-w-0 gap-x-4">
                                    <img
                                        className="h-12 w-12 flex-none rounded-full bg-gray-50"
                                        src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBUVEhgVEhUYGBgYEhgYGBgZGBgZGBoYGBgaGRgYGBgcIS4lHB4rHxoYJjgmKy8xNTU1GiQ7QDs0Py40NTEBDAwMEA8QHxISHjQsJSw0NDY9MTY0NDQ0ND09NDQ0NDQxNjQ0ODQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NP/AABEIALQBGAMBIgACEQEDEQH/xAAcAAACAgMBAQAAAAAAAAAAAAAAAQIDBAUGBwj/xABCEAACAQIEAgcECAUDAgcAAAABAgADEQQSITEFQQYiUWFxgZETMqHBQlJygpKx0fAHFCMz8WLC4UNTFRYkc7LD0v/EABoBAQADAQEBAAAAAAAAAAAAAAACAwQBBQb/xAAoEQACAgEEAQMEAwEAAAAAAAAAAQIRAwQSITFBEzJRBSJhcZGhsYH/2gAMAwEAAhEDEQA/APVoQhOHRwhCAOEUcAccjHeAMRxAxiAShFHACJiALnSazpBxpMJRNSpfuA1JM8p4x0pxmODeyRlo6qbe6w776XHaICVnr9XidBfeqoO4ut/z74hxKiSVFVMwIBGcXBIJFx3gG0+ff/Dap7bjblyltDBV90Zr23v+/wB3kdy+SWyXwfQ6sCLg3B5jaRM8T4N0rxODYB7tT0BG+lwNL6A5dJ6b0Y6UUsahCkK6i7JflfcX3kiPRvYjGYjAFFAxEwAheKEADEDHCAMRxRwBiMQgIACEBHACEIQAhCEAUIQgBHFCAOEUIBKEjHAHeSEhJAwCUd5G8xOLY4UMPVrHanSd7duRSQPhAPMumWJOP4l/LBiMPhtHIOjPu+3O9k7sp7ZsaeQKEpgKqiwAGgE5/o+mSiWzZndy7tzLHU39b+c22GMyZp+DZggkrZmfyYbl8IJw9V2H7MyqD+G0vzynx2aH+jU1+HU3VkqLcH1B7ROEx9KtgK4ak7KBYqy6ag3F+0baT0bEnnNP0hwi1aJvuuol2KbTplObGmrR3vRjji4zDLWUWa+V1+q6gXHgQQR3GbUzyb+FGOZMU+HPuvTLW5Z01BA8C3pPWDNZhEYoGIwBwijgBCEUAlHEI4BIQijEAcIoGAOEUYgDhCEAjFCEiBwiheSA4RXhAHCKF4A47yMYgEpounD24bie+lbyLKD8LzeTnen7EcMxFvqKPLOt/heAcNw6lkpIOZF/Uza4en2mautm9gltGNNPioP6Tmn4iysPZ19Qb5dcpvzB0zeIvMkobmbIz2o9HpqvbLrC3Kc1wPibVCFbftGx8JbxrFVEBydW30j+Q7ZVt5ovclVm4r0zvMDFpmRgOamaLh2Nd261VGIB6ge7ab3XS/ledBh3DjMPOS27WQ3bkc70ZYJxTDta39QofF0ddfxfCeyGeK4eqE4jTb6mLS9uQzgN8DPaTNkejDNUxQihJEAjkY4BKKKMGAMSUiI4OkhGJESUAcIQgBCEIACEBCAQijhACEIQAhFCAO8ULxQCV4wZGMQcJTzzp7Sdq5RiTTeiuUdnvBrd9xfznoc0nSrAiphyw95NQRvY6MPC2v3ZCae3gsxNJ8nGYjDBwFtcZANDpa3duLTDPA0Rlcpqtsp1AABuLWNrD4TaU9FXS1lXTs02llbEDJY9mn/EyuTTNsYprk13CsIqVMyAAWtYX5a8yT8Zl8QwQqXDC+xG/nJ4FkB94NY62sbd0z6zC5I7NjvIO7ssUVVHPJwCmzM5XrM1yQSCDe91tqDfn4za4ajkFrk+Nte0m3OZlCqh5RViN4cmyDionM1eHH+ddxspRxtq51trpa4vO36JcXqYhavtR7lQAHtBBNth3es57GUQzU2GbMtzpsQ2lj232E7ThPDxQpBBv7zntc7+Q28ppxttlGVRjH8szLxXjMUvMg4xIyUARgIiZJYBKOFpRiaxQra2rWN77WMHTIkhMUYg90QrNfeKOGXHGRFB0I4o4AQjEIBCK0cIBGKSMjAAxXgYjAC8LyBMiTALcwjzCUExXg4ZOYSNUKylTsykHwItKLwzQDkuN8P9iVsxYMp6xFutfUW8xOT4rjTSdQSBnFszHuGg7Lkz07iOEFWmUOh3U9h/ScJiMGGZlqKCy3XXuuDM84pSvwasc3KNeTQ4KjUFQvSYC4sQSFB8jpN3gcGVOeowL7nrAnnppy2lFDh1JTZqdxt1Sy38QJsBwtH0Cuq/bf8AMmQk4l6jxwyyjWDEtTP2h3jfz/SZLNobzFw2DShmWmD1jcAkmxO++wmNj+JinYqblWUD7ZYAacwN/KchDdKkclLbG34Ow4dwgqyPUYEAKwWxuGtseWh1v8JvC01nC+JpXQMhs1usnMHn4jvmeDNvp7HTRgeTfzZMxGIGO04cAGSEjaSEAAJICEYgDmJjfeTxY/CZcxMV76eDfKAQEko1EUsojrjxE6cM9t4oExThIYEBARwAhHCAVWhaOEAiYjJGRMAiZEyZEiYBAyJkzImDhAyMmZCAAhCc7xfpZSpXWkRUftB6gPew97wHrLIY5TdRRGU1FWzccTxYo0alU7JTZ/EqpIHmRaeR9GukDOgNZszZiHY75r3zHxvrNhxXiNSvTqPVfN1SFUaKoJsbDYE9u9vGcZwUZWZTzdh6AWPnf4SWp07hBWdwZd0uD1jDFD1gd9eVpku6gXNhOFwdZk6uYgeOn+Zt6CFveJPnPKlFI9JSsvx2OLEhNtr/ACE5zitTr00H/czHyB+c3tRRsPO35Cc9jLnErpoOqPn8vWatFG80V+TPqnWJs3FCoyWKsQRqCDYg9om4w/S6umjhHH+oZW9V/SaUbSjGCy35A/npPrJ4YT9ys+fjOUemdthOmtI/3UZNQBlIcG/ja032F4zh6gulVPBmCN6N8p4+e/kfjJox7Zjn9Pxy9rovjqZLvk9tAjtPHsLxGrT/ALdR0+yzAeYE6bhnTR1stdQ4uOuCFYC+5AGvoJjyaDJHmPJojqYvvg7y0kBMTDcSoOcqVUYnZQ65j9295mCYWmuy9NPodph1x/UHch+Jmbaa/ieJpJY1BmY+6Bvbn4Ccbrkkk26RMLJ4f3x4xYNKdRA6oovcaqt9NJkph1U3CqPAARZxqnTLCIRwg6AjtARiAEI4QCq0UnEYBEiIxmIwCJkSJYZEiAVkSJlhlZEHCJmHxDHJRpl6hsBsObHkB3zMYTz7phxH2lUop6lO6Dvf6Z9er90zRpsPqzrwV5Z7I2a7jfSCpibrfKl/cU2B+0d289O4Tnno3Om5Nhbvl7rzG4g+Np0k9owzvchKQ2BH0nPZ3Df1nsuMcMeEeenKcuWZeMCrTFMuBUdCyJYliiKxLEj3dja+9j2GcyaZV7ga2Demh+B9JiDH1BiRXqqztc5gbi4ZSth2WU6eAnQ+zVsjqbrY2ax1Vuqd9b6nzmSUXnjKMu+0aYv0pJroycKucBhNtTPfMLgeHyVMjW12ttfum+qcNG88DUYpYp7WexhmskdyMDFnIhIPI6zQqb10B5b9zEXP5gfdE3GKdajrTUdXOoY9uutvAX8ZzeLx92bIcrsxJYWOUG9wt9jtry7jPV0WleOpyXPaRg1edS+1dDXpgylkfDU3VSyqQzo9wbAswJzeGl5t8HxChilZaGZXsf6LlSzC17ow9/npYHTvAnN0+HUiPpse4/O0y8BwjI61AWQqbghjm7Nx3aETfDFnTtP++DHKeJrlGaOsbDYay242kr787nU8/GRdQdD+/OehRkEDrIljm77Q1B0NxzF9Ygt7+MAmjhTtz35g9/6zs+jvTEoRTxRLLsrnVl8T9JfiJwzHXSArcmWUZsMMkaaJwySi7R7zSqK6hkIZWFwQbgg8wZxvG8QWxbg7KVUdwCg/mSfOcjwXj+Iww/oVM6X1puLrfu5r5GbJOMfzFVqhTIzFcyg3GYKFNr6jYGeDq9LPFHd4+T19FmjOdeaPQOAf2B9p7/imznPdF8WDnpk8w69/VAb0sPWdDM8HcUSyKpMcIRyRAI4Qg6EI4QCERElCAQtImWWkSIBAxESZEiRAIESDCWkSDCDhiY7ECnTeodkps/jlBIHmdPOeQVapLAMbk5iT2nS58zf1npPTavkwbgHV3RB5tmPwUzypKl6tuwkDw2nq/T40nL5Zi1TtpGTlmNUw4ve2vbMp9CD6yZE9ZxT7MSdGorYXMLESqhh69P8AtMMt75W1W9rXHNfK17C+03VoisqlhjLssjkceiGJxFRch9jmvSQvkcaNbK1lYX3W+/ObCvxh0pBGa+dAwub1Arcrd+2u3btKMWLUkZTc5XW3NSrZtfx3lFXCLnDN1mVQoY3OyhRe+unLa0zejvpd18/guWXbbXH6/JRw+rVasLgIgV+r9Juo1teWtiLWleHwCKAFW+m5myoCzn/233+ww3kFWaYY0ptvnoqlNtIrVbDQW8I8plloiJfRUV5YFZIwMHClqfh+/CIpfx/dpYx85WTfacOlZsDbu3kh3ymsjMNNPKRoYaozBMwuTYSuUtvL6JRjfC7LELIT1cyn6p6w+7zm14Q4ZjbMMttGWx17O2FDgKKQalUt2qoIB+8STbyE3GGFNT/TRUvppv6nWeJrtfinjcI8/wCHq6PSThNTfBslqtdWW6MpvcHreo2+M3NDpK6jroH7wcvroR6TQu1v1lDueyeHGco9HqSxxl2dInTDrWbDPbmyOj2+6Spm5o8ew7Ldal+0Krsw+0qqSJwarpMXGM9MirTOqWvckBkJsytblbbsIEvWe30Z5YElaZ6hg8fSq39k6PbcKRdftLuPOZVpxKYbOVqLdamjJUW4YXI0YknOBqLGw32nV8LxXtaSsQA2zAbBhvbuIsw7mEvjKMlaZnaadMy4QhOgUI4oArRWkoQCBEiRJkSJgEDItJGRYwcOJ/iRXslFO13f8CgD/wCZnmNN7HNzuf38J3n8UK/9SknZSdh99rf7J58+i/i/KezpFWJGDO7mzfutxaV0W0sdxJobiVN1Wv26T0r8mQtEAdvMRE2MDqDedBc9vZd61AT4Mtv/AKzJ4tv6hHaqMPe5op+lr+9zvFQF0df9IP4WA7NNGaQrr7l/+2ndsoX5f42FMeMn8lkuY/wSoDVu6m247bL85Vl7pJF6rnQ2p2131enoNd9/IGVgmWRf3P8A4Rl7UMmBaMuPCRa37MsICzRxFfKQLDkROAkx7dfKYtf/ADv66y035j0tMfH1AiZjzNgO0nlK5ySXJOCtlT1iOYI79LecjheKqtQXNgbi+++3xmnqO77kAX2G0yuH01Wojb2YEnfzmHM5ThJLqjTjShJN/J1C1Gb3Edu/KVHq1gZPDB2NmUoe8g/kTKf5og/3F8Cy/lH/ADOtxY94M+ZcWuKPdUl3Z0GHRlXU6SbE90wMDjKj2XJcfWLW9BaZzjtlVUW3YCoe6YvEWzhad7B2sx7EsS/wBHiRLHaapb1MWiLUyWpNc8j1k6gP1iM3kDOpEJOkeh0aI9mAGtkp39NgPM+pMs4NjFXFezvb2lEMByzIWGneVv8AhiUJkGdsoCszm+1ib920wOE4H2+OL65KGUX1F3W9lv3HMT3Ads0aJbnJy6S/sw5nVV3Z28I4S84RhCEAUI4oAjItJGQMAgZWZY0or1VRGdzZVUsx7ANTOnGeYfxNqZsUo+pTC+vX/wB04t/d9ZtukfEDiKz1CLZ3JA7F0Cj8KiaWs1l8x8Z7uKOzGk/g82b3TbNzhKnUW/1F+AHytLq6gjtvMTBuDTQj6gHmosfyMzL3Q23HymuErVFMlTIoTl8I1HI8xFSPMc5Ii2smiLL8AeuV2urDnzVgPjaYmNxGVE6ha9x1bDdyF2Fze47Nt5fTqZHVx9Ehrj/Sb/KXPa5H1XdeXI93cecomnvpOr8lkWlG2rK0v7NrNqWRdSDpZmPxC/u0rBDDUf55zJrrlVFtYm7n74XKPwhW+/MYrqbc7X/XxlmPlN/LISfgiUA2FpG0nKnaWMiNtf3+7yBWJv3aQLW979RItkqLFsOU7DoDhUf2zVERwAigOobRs+b3u2wE4zPfQes9C6A0cuGd/r1T6KoA+JMxa51ibL9Ormjc/wDl7B8sLQF/q00U+qgSjFdEMHU/6ZQ23R3S3lcr6ibYGWoZ4iySXTZ6DjF+DjMT/D8ov/pa3PUVf/2g/wBs4/Fgo702Ds6OyMQAFzIxU2LG9tOye1I012P6O4au5epT65Fiysyk8gTY2JtzMqnHc78l0J7ePB5Tg8S1wBdbnnN9yJ3spY2BJAAuSewATsqfRDBj/pk95d7/AAIm3wPD6VIEUkC333JI7CTqZV6PPJb66S4PFuI8RdkJw6hjfS9zrzso59xIOs1OB40+GqGpUwuZyt+s7oBf6VmUnXx+E9fq/wAP8E1Vqqq6FvoI4VBz0W2nhew5WmN0g6A0q1FUonIwZBmc3OTPdxmsTqOW2gmtRw0lTMsp5G7s5fgPEcRj3X2dLJTX6IJZWqaZGdyB1FtmtbcAG9xPTuD8NXD0lpqb21ZvrMdzbl/xJcK4cmHpLSpqAqj1PMnvmbIyaSqKpHEndvsIQhIkyMIQgBFGYoAjIGTMiYBW057pySOHVypsQqHxtUQ289p0LTTdLcPnwVdb2/p5uZ0QhzoO5TJ439y/aIT9rPE2xAY2tlPYfkecx6y3BHaPjM+thVbkCM24PzmrxDMpIVSQO0i/rPebdcnmpW+A4RjwrZH0BOnc23x/SdAhsbjb8xOLxDgm+qnv0nU8Pq5kHPQEeYuP0kMOTmizLDizKdcpuPdOh89jLxqO0ERU2DCx7JBBYkeHxM3IyMKoIGYctx28jMjC4pH67KxYMMymwRyqqLkjUXCi47b66yu0qpCxe+moPwMhkxqTTbJRk0mi2oxJJO5Nz2eXd3Sp6ltBrJG7AEbdtx8pW4CjUyapLjo5+xFr7yLMJXmZthYRZbcjfunLOgXt/wAxLUzcrdt9pBlbnt8ZPLzJsBOfsF1FL9w5z0HoQT7B/q+1sv4F19Ms87o4i5tqL6C2oPj2z1Do9gTQw6o2jFi7D6pa3V8gB53nn6+a9OjTpo/dZt1aWI0x80kGninoGYjS5GmEjy5HgGWrSwNMVXlitAMgGMSoNJgwdJwkbxwBwihACKEIARQhAAyswhAImYnE0BoVAdjRqX/AY4Tse0Rl0eGcUogNcXB0GhI017Jr8V/tHzhCfQLo8xmjrViTrb0nQ8I/tJ4sPIMbQhKcfuL5+029Pfz+Zjqe96fKEJvh7TFLssp8v3ylNdAc4OxAv6NCEZPYdh2V8OQCmANrfnqfiTEBc6whOY/YjsvcyyqbAW5mRZPH1MISbIlI3mM7kk35bDlCErl2SRvOilJTXplgD/UU2O1weyentCE8f6h71+jfpfayIkhCE881Fiy1IQgFyS5IQgExLVhCASkhFCAOKEIB/9k="
                                        alt=""
                                    />
                                    <div className="min-w-0 flex-auto">
                                        <p className="text-sm font-semibold leading-6 text-gray-200">
                                            Matheus Benediht Caldeira
                                        </p>
                                        <p className="mt-1 truncate text-xs leading-5 text-gray-200">
                                            matheus@gmail.com
                                        </p>
                                    </div>
                                </div>
                                <div className="hidden shrink-0 sm:flex gap-3 sm:items-end">
                                    <p className="flex items-center gap-3 mt-1 text-sm leading-5 text-gray-200">
                                        <Pencil />
                                    </p>
                                    <p className="flex items-center gap-3 text-sm leading-6 text-gray-200">
                                        <Trash />
                                    </p>
                                    <div className="mt-1 flex items-center gap-x-1.5">
                                        <div className="flex-none rounded-full bg-emerald-500/20 p-1">
                                            <div className="h-1.5 w-1.5 rounded-full bg-green-500" />
                                        </div>
                                        <p className="text-sm leading-5 text-gray-300">
                                            Matrícula
                                        </p>
                                    </div>
                                </div>
                            </li>
                            <li className="flex justify-between gap-x-6 py-5">
                                <div className="flex min-w-0 gap-x-4">
                                    <img
                                        className="h-12 w-12 flex-none rounded-full bg-gray-50"
                                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlLDHoD8JM2eKpu9sAgouTdCQbuq088soOZu2PW4Bi&s"
                                        alt=""
                                    />
                                    <div className="min-w-0 flex-auto">
                                        <p className="text-sm font-semibold leading-6 text-gray-200">
                                            Matheus Benediht Caldeira
                                        </p>
                                        <p className="mt-1 truncate text-xs leading-5 text-gray-200">
                                            matheus@gmail.com
                                        </p>
                                    </div>
                                </div>
                                <div className="hidden shrink-0 sm:flex gap-3 sm:items-end">
                                    <p className="flex items-center gap-3 mt-1 text-sm leading-5 text-gray-200">
                                        <Pencil />
                                    </p>
                                    <p className="flex items-center gap-3 text-sm leading-6 text-gray-200">
                                        <Trash />
                                    </p>
                                    <div className="mt-1 flex items-center gap-x-1.5">
                                        <div className="flex-none rounded-full bg-emerald-500/20 p-1">
                                            <div className="h-1.5 w-1.5 rounded-full bg-green-500" />
                                        </div>
                                        <p className="text-sm leading-5 text-gray-300">
                                            Matrícula
                                        </p>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </main>
            </div>
            <footer className="bg-slate-600 border-t border-slate-500 p-6"></footer>
        </div>
    );
}
