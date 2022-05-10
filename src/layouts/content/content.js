import React, { useEffect, useState, useMemo } from "react";
import { Box } from '@material-ui/core';
import styled from "styled-components";
import IMG_SHAPE01 from "../../assets/images/shapes.png"
import CustomBtn from '../../components/CustomBtn';
import CustomInput from "../../components/CustomInput";
import IMG_Graph01 from "../../assets/images/Graph.png";
import IMG_Graph02 from "../../assets/images/Graph (1).png";
import IMG_Graph03 from "../../assets/images/Graph (2).png";
import IMG_LeftSlide01 from "../../assets/images/Frame.png";
import IMG_LeftSlide02 from "../../assets/images/Frame (1).png";
import IMG_Logo from "../../assets/images/logo 7.png";
import { FaTwitter, FaTelegram, FaMediumM, FaYoutube, FaLinkedin, FaGithub, FaReddit } from "react-icons/fa";
import { MdOutlineKeyboardArrowUp } from "react-icons/md";
import { useWeb3React } from "@web3-react/core";
import { ethers } from 'ethers';
import { WARMIZ_ABI, EWARMIZ_ABI, SWARMIZ_ABI } from "../../utils/abi";
import { CONTRACTS } from "../../utils/constants";


const Content = () => {
    const { account, active, library, activate } = useWeb3React();
    const WARMIZE_Contract = useMemo(() => (library ? new ethers.Contract(CONTRACTS.WARMIZ_TOKEN, WARMIZ_ABI, library.getSigner()) : null), [library]);
    const EWARMIZE_Contract = useMemo(() => (library ? new ethers.Contract(CONTRACTS.WARMIZ_ETOKEN, EWARMIZ_ABI, library.getSigner()) : null), [library]);
    const SWARMIZE_Contract = useMemo(() => (library ? new ethers.Contract(CONTRACTS.WARMIZ_STOKEN, SWARMIZ_ABI, library.getSigner()) : null), [library]);


    return (
        <StyledComponent>
            <TopPart>
                <LeftPart01>
                    {/* <Box display={"flex" }></Box> */}
                    <TopPart01 >
                        <Letter01>HOME . DOCS .</Letter01>
                        <Letter02>{'\u00a0'}STAKING</Letter02>
                        <ImgPart01>
                            <img src={IMG_SHAPE01} alt='' />
                        </ImgPart01>
                    </TopPart01>
                    <TopPart02>staking</TopPart02>
                </LeftPart01>
                <CenterPart01>
                </CenterPart01>
                <RightPart01 >
                    <LeaderBox>
                        <CustomBtn width={"100%"} height="100%" str="LEADERBOARD" fsize={"16px"} fcolor={"white"} bgcolor=" rgba(255, 255, 255, 0.1)" border="none" fweight={"400"} ffamily={'Russo One'} lheight={"19px"} />
                    </LeaderBox>
                </RightPart01>
                {/* <Box display={"flex"} position="absolute" width={"100%"} height="100%">
                    <Box display={"flex"} flex="1" >
                    </Box>
                    <Box display={"flex"} flex="8" >
                        <Box display={"flex"} flex="1" flexDirection={"column"} justifyContent="center">
                            <TopPart01 >
                                <Letter01>HOME . DOCS .</Letter01>
                                <Letter02>{'\u00a0'}STAKING</Letter02>
                                <ImgPart01>
                                    <img src={IMG_SHAPE01} alt='' />
                                </ImgPart01>
                            </TopPart01>
                            <TopPart02>staking</TopPart02>
                        </Box>
                        <Box display={"flex"} flex="1" justifyContent={"flex-end"} alignItems="center">
                            <Box display={"flex"} >
                                <CustomBtn width={"170px"} height="50px" str="LEADERBOARD" fsize={"16px"} fcolor={"white"} bgcolor=" rgba(255, 255, 255, 0.1)" border="none" fweight={"400"} ffamily={'Russo One'} lheight={"19px"} />
                            </Box>
                        </Box>
                    </Box>
                    <Box display={"flex"} flex="1">
                    </Box>
                </Box> */}
            </TopPart>
            <CenterPart>
                <Box display={"flex"} flex="1"></Box>
                <Box display={"flex"} flex="5" flexDirection={"column"} width="100%">
                    <UpPart01>
                        <LeftPart02>
                            <LetterBox01>Staking System</LetterBox01>
                            <LetterBox02>
                                <Box display={"flex"} flexDirection={"column"}>
                                    <Box display={"flex"} >
                                        <Box display={"flex"} color="white" fontWeight="400" fontFamily={'Russo One'} fontSize="30px" lineHeight={"24px"}>256.50</Box>
                                        <Box display={"flex"} color="white" fontWeight="400" fontFamily={'Russo One'} fontSize="16px" lineHeight={"24px"} ml="10px">BUSD</Box>
                                    </Box>
                                    <Box display={"flex"} marginTop="10px">
                                        <Box display={"flex"} color="rgba(255, 255, 255, 0.7)" fontWeight="400" fontFamily={'Russo One'} fontSize="14px" lineHeight={"24px"}>Total Stake</Box>
                                    </Box>
                                </Box>
                                <LetterBox03>
                                    <Box display={"flex"}>
                                        <Box display={"flex"} color="#7DAD3A" fontWeight="400" fontFamily={'Russo One'} fontSize="30px" lineHeight={"24px"}>1,272.68 </Box>
                                        <Box display={"flex"} color="white" fontWeight="400" fontFamily={'Russo One'} fontSize="16px" lineHeight={"24px"} ml="10px">BUSD</Box>
                                    </Box>
                                    <Box display={"flex"} marginTop="10px">
                                        <Box display={"flex"} color="rgba(255, 255, 255, 0.7)" fontWeight="400" fontFamily={'Russo One'} fontSize="14px" lineHeight={"24px"}>Total Earned</Box>
                                    </Box>
                                </LetterBox03>
                            </LetterBox02>
                            <Box display={"flex"} border={"1px solid rgba(255, 255, 255, 0.15)"} mt="30px" width={"100%"}></Box>
                            <LetterBox04 >
                                <CustomBtn width={"110px"} height="50px" hcolor="#7DAD3A" hgcolor="rgba(255, 255, 255, 0.1)" str="7 DAYS" fsize={"16px"} hborder={"1px solid #191919"} fcolor={"white"} bgcolor="black" border="1.5px solid rgba(255, 255, 255, 0.7)" fweight={"400"} ffamily={'Russo One'} lheight={"19px"} />
                                <CustomBtn width={"110px"} height="50px" hcolor="#7DAD3A" hgcolor="rgba(255, 255, 255, 0.1)" str="14 DAYS" fsize={"16px"} hborder={"1px solid #191919"} fcolor={"white"} bgcolor="black" border="1.5px solid rgba(255, 255, 255, 0.7)" fweight={"400"} ffamily={'Russo One'} lheight={"19px"} />
                                <CustomBtn width={"110px"} height="50px" hcolor="#7DAD3A" hgcolor="rgba(255, 255, 255, 0.1)" str="30 DAYS" fsize={"16px"} hborder={"1px solid #191919"} fcolor={"white"} bgcolor="black" border="1.5px solid rgba(255, 255, 255, 0.7)" fweight={"400"} ffamily={'Russo One'} lheight={"19px"} />
                                <CustomBtn width={"110px"} height="50px" hcolor="#7DAD3A" hgcolor="rgba(255, 255, 255, 0.1)" str="50 DAYS" fsize={"16px"} hborder={"1px solid #191919"} fcolor={"white"} bgcolor="black" border="1.5px solid rgba(255, 255, 255, 0.7)" fweight={"400"} ffamily={'Russo One'} lheight={"19px"} />
                            </LetterBox04>
                            <Box display={"flex"} mt="30px" width={"100%"} justifyContent="space-between">
                                <Box display={"flex"}>
                                    <Box display={"flex"} color="rgba(255, 255, 255, 0.7)" fontWeight="500" fontFamily={'Inter'} fontSize="16px" lineHeight={"45px"}>
                                        Lock period:
                                    </Box>
                                    <Box display={"flex"} color="white" fontWeight="500" fontFamily={'Inter'} fontSize="16px" lineHeight={"45px"} ml="10px">
                                        14 days
                                    </Box>
                                </Box>
                                <LetterBox06>
                                    <Box display={"flex"} color="white" fontWeight="500" fontFamily={'Inter'} fontSize="16px" lineHeight={"45px"}>APY Rate</Box>
                                </LetterBox06>
                            </Box>
                            <Box display={"flex"} mt="10px" width={"100%"} justifyContent="space-between">
                                <Box display={"flex"}>
                                    <Box display={"flex"} color="rgba(255, 255, 255, 0.7)" fontWeight="500" fontFamily={'Inter'} fontSize="16px" lineHeight={"45px"}>
                                        Re-locks on registration:
                                    </Box>
                                    <Box display={"flex"} color="white" fontWeight="500" fontFamily={'Inter'} fontSize="16px" lineHeight={"45px"} ml="10px">
                                        Yes
                                    </Box>
                                </Box>
                                <LetterBox06>
                                    <Box display={"flex"} color="#7DAD3A" fontWeight="400" fontFamily={'Russo One'} fontSize="30px" lineHeight={"45px"}>
                                        12 %
                                    </Box>
                                </LetterBox06>
                            </Box>
                            <Box display={"flex"} mt="10px" width={"100%"} justifyContent="space-between">
                                <Box display={"flex"}>
                                    <Box display={"flex"} color="rgba(255, 255, 255, 0.7)" fontWeight="500" fontFamily={'Inter'} fontSize="16px" lineHeight={"45px"}>
                                        Early unstake fee:
                                    </Box>
                                    <Box display={"flex"} color="white" fontWeight="500" fontFamily={'Inter'} fontSize="16px" lineHeight={"45px"} ml="10px">
                                        25%
                                    </Box>
                                </Box>
                                <LetterBox06>
                                    <Box display={"flex"} color="rgba(255, 255, 255, 0.7)" fontWeight="400" fontFamily={'Inter'} fontSize="16px" lineHeight={"45px"}>
                                        *APY is dynamic
                                    </Box>
                                </LetterBox06>
                            </Box>

                            <Box display={"flex"} mt="10px" width={"100%"} >
                                <Box display={"flex"}>
                                    <Box display={"flex"} color="rgba(255, 255, 255, 0.7)" fontWeight="500" fontFamily={'Inter'} fontSize="16px" lineHeight={"45px"}>
                                        Status:
                                    </Box>
                                    <Box display={"flex"} color="white" fontWeight="500" fontFamily={'Inter'} fontSize="16px" lineHeight={"45px"} ml="10px">
                                        Unlocked
                                    </Box>
                                </Box>
                            </Box>
                            <LetterBox07>
                                <Box display={"flex"} color="white" fontWeight="500" fontFamily={'Inter'} fontSize="16px" lineHeight={"45px"}>APY Rate</Box>
                                <Box display={"flex"} color="#7DAD3A" fontWeight="400" fontFamily={'Russo One'} fontSize="30px" lineHeight={"45px"}>
                                    12 %
                                </Box>
                                <Box display={"flex"} color="rgba(255, 255, 255, 0.7)" fontWeight="400" fontFamily={'Inter'} fontSize="16px" lineHeight={"45px"}>
                                    *APY is dynamic
                                </Box>
                            </LetterBox07>
                            <Box display={"flex"} mt="50px" width={"100%"} >
                                <Box display={"flex"}>
                                    <Box display={"flex"} color="rgba(255, 255, 255, 0.7)" fontWeight="400" fontFamily={'Russo One'} fontSize="16px" lineHeight={"19px"}>
                                        Balance:
                                    </Box>
                                    <Box display={"flex"} color="rgba(255, 255, 255, 0.7)" fontWeight="400" fontFamily={'Russo One'} fontSize="16px" lineHeight={"19px"} ml="10px">
                                        2889.00 BUSD
                                    </Box>
                                </Box>
                            </Box>
                            <LetterBox05>
                                <CustomInput width={"55%"} height="60px" fsize={"16px"} fcolor={"white"} bgcolor="black" border="1px solid #F5841F" />
                                <CustomBtn width={"35%"} height="60px" hcolor="white" hgcolor="#E27625" str="APPROVE" fsize={"16px"} fcolor={"white"} bgcolor="rgba(255, 255, 255, 0.1)" border="none" fweight={"400"} ffamily={'Russo One'} lheight={"19px"} />
                            </LetterBox05>
                            <Box display={"flex"} mt="20px" width={"100%"} >
                                <Box display={"flex"}>
                                    <Box display={"flex"} color="rgba(255, 255, 255, 0.7)" fontWeight="400" fontFamily={'Russo One'} fontSize="16px" lineHeight={"19px"}>
                                        Staked:
                                    </Box>
                                    <Box display={"flex"} color="rgba(255, 255, 255, 0.7)" fontWeight="400" fontFamily={'Russo One'} fontSize="16px" lineHeight={"19px"} ml="10px">
                                        256.50 BUSD
                                    </Box>
                                </Box>
                            </Box>
                            <LetterBox05>
                                <CustomInput width={"55%"} height="60px" fsize={"16px"} fcolor={"white"} bgcolor="black" border="1px solid #F5841F" />
                                <CustomBtn width={"35%"} height="60px" hcolor="white" hgcolor="#E27625" str="WITHDRAW" fsize={"16px"} fcolor={"white"} bgcolor="rgba(255, 255, 255, 0.1)" border="none" fweight={"400"} ffamily={'Russo One'} lheight={"19px"} />
                            </LetterBox05>
                        </LeftPart02>
                        <Box display={"flex"} flex="0.2"></Box>
                        <RightPart02>
                            <GraphBox01>
                                <Box display={"flex"} flexDirection={"column"} justifyContent="space-between">
                                    <Box display={"flex"} color="#7DAD3A" fontWeight="400" fontFamily={'Russo One'} fontSize="30px" lineHeight={"24px"}>
                                        $7,868,163.54
                                    </Box>
                                    <Box display={"flex"} mt={"30px"} color="rgba(255, 255, 255, 0.7)" fontWeight="400" fontFamily={'Russo One'} fontSize="14px" lineHeight={"24px"}>
                                        Total Value Locked
                                    </Box>
                                </Box>
                                <Box display={"flex"} alignItems="center">
                                    <img src={IMG_Graph01} width="176px" height={"62px"} alt='' />
                                </Box>
                            </GraphBox01>
                            <GraphBox01>
                                <Box display={"flex"} flexDirection={"column"} justifyContent="space-between">
                                    <Box display={"flex"} color="#7DAD3A" fontWeight="400" fontFamily={'Russo One'} fontSize="30px" lineHeight={"24px"}>
                                        272,158.50 %
                                    </Box>
                                    <Box display={"flex"} mt={"30px"} color="rgba(255, 255, 255, 0.7)" fontWeight="400" fontFamily={'Russo One'} fontSize="14px" lineHeight={"24px"}>
                                        APY
                                    </Box>
                                </Box>
                                <Box display={"flex"} alignItems="center">
                                    <img src={IMG_Graph02} width="176px" height={"62px"} alt='' />
                                </Box>
                            </GraphBox01>
                            <GraphBox01>
                                <Box display={"flex"} flexDirection={"column"} justifyContent="space-between">
                                    <Box display={"flex"} color="#7DAD3A" fontWeight="400" fontFamily={'Russo One'} fontSize="30px" lineHeight={"24px"}>
                                        5699
                                    </Box>
                                    <Box display={"flex"} mt={"30px"} color="rgba(255, 255, 255, 0.7)" fontWeight="400" fontFamily={'Russo One'} fontSize="14px" lineHeight={"24px"}>
                                        Number of Stakers
                                    </Box>
                                </Box>
                                <Box display={"flex"} alignItems="center">
                                    <img src={IMG_Graph03} width="176px" height={"62px"} alt='' />
                                </Box>
                            </GraphBox01>
                            <Box display={"flex"}></Box>
                        </RightPart02>
                    </UpPart01>
                    <DownPart01>
                        <Box display={"flex"} width={"100%"} justifyContent={"center"} mt={"50px"} color="white" fontWeight="400" fontFamily={'Russo One'} fontSize="24px" lineHeight={"29px"}>
                            Total Value Locked
                        </Box>
                        <Box display={"flex"} width={"100%"} mt="20px" border={"1px solid #F5841F"}></Box>
                        <Box display={"flex"} width={"100%"} justifyContent={"space-between"} mt={"20px"}>
                            <CustomBtn width={"23%"} height="50px" hcolor="#7DAD3A" hgcolor="rgba(255, 255, 255, 0.1)" hborder={"1px solid black"} str="DATE" fsize={"16px"} fcolor={"white"} bgcolor="black" border="1.5px solid rgba(255, 255, 255, 0.7)" fweight={"400"} ffamily={'Russo One'} lheight={"19px"} />
                            <CustomBtn width={"23%"} height="50px" hcolor="#7DAD3A" hgcolor="rgba(255, 255, 255, 0.1)" hborder={"1px solid black"} str="FROM" fsize={"16px"} fcolor={"white"} bgcolor="black" border="1.5px solid rgba(255, 255, 255, 0.7)" fweight={"400"} ffamily={'Russo One'} lheight={"19px"} />
                            <CustomBtn width={"23%"} height="50px" hcolor="#7DAD3A" hgcolor="rgba(255, 255, 255, 0.1)" hborder={"1px solid black"} str="TO" fsize={"16px"} fcolor={"white"} bgcolor="black" border="1.5px solid rgba(255, 255, 255, 0.7)" fweight={"400"} ffamily={'Russo One'} lheight={"19px"} />
                            <CustomBtn width={"23%"} height="50px" hcolor="#7DAD3A" hgcolor="rgba(255, 255, 255, 0.1)" hborder={"1px solid black"} str="HERE" fsize={"16px"} fcolor={"white"} bgcolor="black" border="1.5px solid rgba(255, 255, 255, 0.7)" fweight={"400"} ffamily={'Russo One'} lheight={"19px"} />
                        </Box>
                        <TableBox01>
                            <Box display={"flex"} width={"100%"} mt={"20px"} height="60px">
                                <TableTab01 borderRight={"1px solid rgba(255, 255, 255, 0.08)"}>ACTIVE</TableTab01>
                                <TableTab01 borderRight={"1px solid rgba(255, 255, 255, 0.08)"}>INACTIVE</TableTab01>
                                <TableTab02 borderRight={"1px solid #E27625"}>
                                    <Box display={"flex"} ml="30px">DATE:</Box>
                                    <Box display={"flex"} mr={"30px"}>2022 - 11 - 27</Box>
                                </TableTab02>
                                <TableTab03 pl={"30px"}>ACTIVE</TableTab03>
                            </Box>
                            <TableHeaderText01>
                                <ElementText01 display={"flex"} flex="0.8">Pools</ElementText01>
                                <ElementText01 display={"flex"} flex="1">Staked amount</ElementText01>
                                <ElementText01 display={"flex"} flex="1">reward amount</ElementText01>
                                <ElementText01 display={"flex"} flex="1">reward amount</ElementText01>
                                <ElementText01 display={"flex"} flex="1">reward amount</ElementText01>
                                <ElementText01 display={"flex"} flex="0.8">APY %</ElementText01>
                            </TableHeaderText01>
                            <Box display={"flex"} width={"100%"} mt="0px" border={"1px solid #F5841F"}></Box>
                            <TableHeaderText01>
                                <ElementText01 display={"flex"} flex="0.8">
                                    <CustomRadio display={"flex"} justifyContent="center" alignItems={"center"}>
                                        <input type="radio" checked="checked" name="radio" />
                                        <span class="checkmark"></span>
                                    </CustomRadio>
                                    <Box display={"flex"} alignItems="center" ml={"20px"}>
                                        WARMIZ/BNB
                                    </Box>
                                </ElementText01>
                                <ElementText01 display={"flex"} flex="1">1,274,199 $WARMIZ</ElementText01>
                                <ElementText01 display={"flex"} flex="1">2.3 BNB</ElementText01>
                                <ElementText01 display={"flex"} flex="1">1:00 AM 2022 - 11 - 28</ElementText01>
                                <ElementText01 display={"flex"} flex="1">1:00 AM 2022 - 12 - 30</ElementText01>
                                <ElementText02 display={"flex"} flex="0.8">127.23 %</ElementText02>
                            </TableHeaderText01>
                            <TableHeaderText01>
                                <ElementText01 display={"flex"} flex="0.8">Pools</ElementText01>
                                <ElementText01 display={"flex"} flex="1">574,199 $WARMIZ</ElementText01>
                                <ElementText01 display={"flex"} flex="1">0.3 ETH</ElementText01>
                                <ElementText01 display={"flex"} flex="1">1:00 AM 2022 - 11 - 28</ElementText01>
                                <ElementText01 display={"flex"} flex="1">1:00 AM 2022 - 12 - 30</ElementText01>
                                <ElementText02 display={"flex"} flex="0.8">107.28 %</ElementText02>
                            </TableHeaderText01>
                            <TableHeaderText01>
                                <ElementText01 display={"flex"} flex="0.8">Pools</ElementText01>
                                <ElementText01 display={"flex"} flex="1">832,761 $WARMIZ</ElementText01>
                                <ElementText01 display={"flex"} flex="1">79,000 CRO</ElementText01>
                                <ElementText01 display={"flex"} flex="1">1:00 AM 2022 - 11 - 28</ElementText01>
                                <ElementText01 display={"flex"} flex="1">1:00 AM 2022 - 12 - 30</ElementText01>
                                <ElementText02 display={"flex"} flex="0.8">627.75 %</ElementText02>
                            </TableHeaderText01>
                        </TableBox01>

                        <Box display={"flex"} width="100%" justifyContent={"flex-end"} mt="150px">
                            <CustomBtn width={"140px"} height="43.7px" hcolor="white" hgcolor="#E27625" str="UNLOCK" fsize={"16px"} fcolor={"white"} bgcolor="#E27625" border="none" fweight={"400"} ffamily={'Russo One'} lheight={"19px"} />
                        </Box>
                        <JoinPart01>
                            <Box display={"flex"} flex="1" justifyContent={"center"} alignItems="center">
                                <Box display={"flex"} color="white" fontWeight="400" fontFamily={'Russo One'} fontSize="36px" lineHeight={"55px"}>
                                    JOIN THE MOVEMENT
                                </Box>
                            </Box>
                            <Box display={"flex"} flex="1" flexDirection={"column"} justifyContent={"flex-start"} alignItems="center" >
                                <Box display={"flex"} color="rgba(255, 255, 255, 0.7)" fontWeight="500" fontFamily={'Inter'} fontSize="16px" lineHeight={"26px"}>
                                    Be a part of the most successful all in one crypto project in the
                                </Box>
                                <Box display={"flex"} color="rgba(255, 255, 255, 0.7)" fontWeight="500" fontFamily={'Inter'} fontSize="16px" lineHeight={"26px"}>
                                    space while you earn at the same time!
                                </Box>
                                <Box display={"flex"} marginTop="20px">
                                    <CustomBtn width={"200px"} height="60px" hcolor="white" hgcolor="#E27625" str="APPROVE" fsize={"16px"} fcolor={"black"} bgcolor="#F5841F" border="none" fweight={"400"} ffamily={'Russo One'} lheight={"19px"} />

                                </Box>
                            </Box>
                        </JoinPart01>
                        <FootterPart01>
                            <Box display={"flex"} justifyContent="center" alignItems={"center"} mt="100px">
                                <Box display={"flex"} alignItems="center">
                                    <img src={IMG_LeftSlide01} width="73px" height="11px" alt='' />
                                </Box>
                                <Box display={"flex"} ml="30px" color="#F5841F" fontWeight="400" fontFamily={'Russo One'} fontSize="16px" lineHeight={"19px"}>
                                    OUR SOCIALS
                                </Box>
                                <Box display={"flex"} ml="30px" alignItems="center">
                                    <img src={IMG_LeftSlide02} width="73px" height="11px" alt='' />
                                </Box>
                            </Box>
                            <Box display={"flex"} justifyContent="space-between" alignItems={"center"} mt="60px" width={"60%"}>
                                <LinkBox><FaTwitter /></LinkBox>
                                <LinkBox><FaTelegram /></LinkBox>
                                <LinkBox><FaMediumM /></LinkBox>
                                <LinkBox><FaYoutube /></LinkBox>
                                <LinkBox><FaLinkedin /></LinkBox>
                                <LinkBox><FaGithub /></LinkBox>
                                <LinkBox><FaReddit /></LinkBox>
                            </Box>
                            <Box display={"flex"} justifyContent="center" alignItems={"center"} mt="100px" >
                                <img src={IMG_Logo} width={"290px"} height="55px" alt='' />
                            </Box>
                            <Box display={"flex"} justifyContent="space-between" width={"70%"} alignItems="center" mt={"50px"}>
                                <LinkLetter02>Team</LinkLetter02>
                                <LinkLetter02>Timeline</LinkLetter02>
                                <LinkLetter02>$WARMIZ</LinkLetter02>
                                <LinkLetter02>GamePlay</LinkLetter02>
                                <LinkLetter02>Merchandise</LinkLetter02>
                                <LinkLetter02>Tokenomics</LinkLetter02>
                                <LinkLetter02>Cash Flow</LinkLetter02>
                                <LinkLetter02>Disclaimer</LinkLetter02>
                            </Box>
                            <Box display={"flex"} justifyContent="center" width={"100%"} alignItems="center" mt={"20px"}>
                                <LinkLetter02>
                                    Copyright © 2022. All Rights Reserved WARMIZ™
                                </LinkLetter02>
                            </Box>
                            <Box display={"flex"} justifyContent="center" width={"100%"} alignItems="center" mt={"100px"} mb={"100px"}>
                                <LinkLetter03>
                                    <MdOutlineKeyboardArrowUp />
                                </LinkLetter03>
                            </Box>
                        </FootterPart01>
                    </DownPart01>

                </Box>
                <Box display={"flex"} flex="1"></Box>
            </CenterPart>
        </StyledComponent >
    );
}

const StyledComponent = styled(Box)`
    display: flex;
    width: 100%;
    background: black;
    flex-direction: column;
`

const TopPart = styled(Box)`
    display: flex;
    width: 100%;
    height: 252px;
    background-image: url("images/image.png");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    @media (max-width: 900px) {
        transition: 0.5s;
        /* background-size:cover; */
    }
`
const LeftPart01 = styled(Box)`
    display: flex;
    flex: 1;
    width: 100%;
    height: 100%;
    background-image: url("images/Frame left.png");
    background-repeat: no-repeat;
    background-size: 100% 100%;
    flex-direction: column;
    justify-content: center;

    @media (max-width: 900px) {
        transition: 0.5s;
        /* display: none; */
    }

`
const CenterPart01 = styled(Box)`
    display: flex;
    flex: 1;
    width: 100%;
    height: 100%;
    justify-content: center;
    align-items: center;

    @media (max-width: 900px) {
        transition: 0.5s;
        display: none;
    }

`
const RightPart01 = styled(Box)`
    display: flex;
    flex: 1;
    width: 100%;
    height: 100%;
    background-image: url("images/Frame right.png");
    background-repeat: no-repeat;
    background-size: 100% 100%;
    align-items: center;
    @media (max-width: 900px) {
        transition: 0.5s;
        /* display: none; */
    }


`
const TopPart01 = styled(Box)`
    display: flex;
    align-items: center;
    flex-direction: row;
    margin-bottom: 10px;
    margin-left: 50%;
    @media (max-width: 1700px) {
        transition: 0.5s;
        margin-left: 40%;
    }
    @media (max-width: 1400px) {
        transition: 0.5s;
        margin-left: 30%;
    }
    @media (max-width: 1200px) {
        transition: 0.5s;
        margin-left: 10%;
    }
    @media (max-width: 450px) {
        transition: 0.5s;
        flex-direction: column;
    }
`
const TopPart02 = styled(Box)`
    display: flex;
    align-items: center;
    font-family: 'Russo One';
    font-style: normal;
    font-weight: 400;
    font-size: 36px;
    line-height: 43px;
    text-transform: uppercase;
    color: #FFFFFF;
    margin-left: 50%;
    @media (max-width: 1700px) {
        transition: 0.5s;
        margin-left: 40%;
    }
    @media (max-width: 1400px) {
        transition: 0.5s;
        margin-left: 30%;
    }
    @media (max-width: 1200px) {
        transition: 0.5s;
        margin-left: 10%;
        font-size: 28px;
    }
    @media (max-width: 600px) {
        transition: 0.5s;
        font-size: 20px;
    }
    @media (max-width: 450px) {
        transition: 0.5s;
        font-size: 15px;
        margin-left: 40%;
    }
`
const ImgPart01 = styled(Box)`
    display: flex;
    margin-left: 10px;
`

const Letter01 = styled(Box)`
    display: flex;
    font-family: 'Russo One';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    color: rgba(255, 255, 255, 0.7);
    @media (max-width: 1200px) {
        transition: 0.5s;
        font-size: 12px;
    }
    @media (max-width: 600px) {
        transition: 0.5s;
        font-size: 10px;
    }

    @media (max-width: 450px) {
        transition: 0.5s;
        font-size: 8px;
    }
    
`

const Letter02 = styled(Box)`
    display: flex;
    font-family: 'Russo One';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    color: #E27625;
    @media (max-width: 1200px) {
        transition: 0.5s;
        font-size: 12px;
    }
    @media (max-width: 600px) {
        transition: 0.5s;
        font-size: 10px;
    }
    @media (max-width: 450px) {
        transition: 0.5s;
        font-size: 8px;
    }
`
const CenterPart = styled(Box)`
    display: flex;
    width: 100%;
    background-color: black;
    margin-top: 100px;
`
const UpPart01 = styled(Box)`
    display: flex;
    width: 100%;
    flex-direction: row;
    @media (max-width: 1200px) {
        transition: 0.5s;
        flex-direction: column;
    }
    @media (max-width: 600px) {
        transition: 0.5s;
        font-size: 14px !important;
    }
`

const DownPart01 = styled(Box)`
    display: flex;
    width: 100%;
    flex-direction: column;

`
const LeftPart02 = styled(Box)`
    display: flex;
    flex: 1;
    width: 100%;
    flex-direction: column;
`
const RightPart02 = styled(Box)`
    display: flex;
    flex: 1;
    width: 100%;
    flex-direction: column;
    justify-content: space-between;
    @media (max-width: 1200px) {
        transition: 0.5s;
        margin-top: 50px;
    }
`
const TableTab01 = styled(Box)`
    display:  flex;
    flex: 0.5;
    justify-content: center;
    align-items: center;
    font-family: 'Russo One';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    text-align: center;
    text-transform: uppercase;
    color: #FFFFFF;
    background-color: rgba(255, 255, 255, 0.1);
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    &:hover{
        cursor: pointer;
        border-bottom: 1px solid #7DAD3A;
    }
`
const TableTab02 = styled(Box)`
    display:  flex;
    flex: 1;
    justify-content: space-between;
    align-items: center;
    font-family: 'Russo One';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    text-align: center;
    text-transform: uppercase;
    color: #FFFFFF;
    background-color: rgba(255, 255, 255, 0.1);
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    &:hover{
        cursor: pointer;
        border-bottom: 1px solid #7DAD3A;
    }
`
const TableTab03 = styled(Box)`
    display:  flex;
    flex: 2;
    justify-content: space-between;
    align-items: center;
    font-family: 'Russo One';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    text-align: center;
    text-transform: uppercase;
    color: #FFFFFF;
    background-color: rgba(255, 255, 255, 0.1);
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    &:hover{
        cursor: pointer;
        border-bottom: 1px solid #7DAD3A;
    }
`
const TableHeaderText01 = styled(Box)`
    display: flex;
    width: 100%;
    margin-top: 20px;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 45px;
    /* or 281% */
    text-transform: uppercase;
    color: rgba(255, 255, 255, 0.7);
`
const ElementText01 = styled(Box)`
    justify-content: center;
    align-items: center;
`
const ElementText02 = styled(Box)`
    color:#7DAD3A;
    justify-content: center;
    align-items: center;
`
const CustomRadio = styled(Box)`
    
`
const JoinPart01 = styled(Box)`
    display: flex;
    width: 100%;
    height: 400px;
    margin-top: 200px;
    background-image: url("images/BGShapes.png");
    background-size: 100% 100%;
    background-repeat: no-repeat;
    flex-direction: column;
    justify-content: center;
`
const FootterPart01 = styled(Box)`
    display: flex;
    width: 100%;
    flex-direction: column;
    align-items: center;
`
const LinkBox = styled(Box)`
    display: flex;
    width: 60px;
    height: 60px;
    color: #F5841F;
    font-size: 20px;
    background-image: url("images/link_rect.png");
    background-repeat: no-repeat;
    background-size: 100% 100%;
    align-items: center;
    justify-content: center;
`

const LinkLetter02 = styled(Box)`
    display: flex;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 40px;
    /* or 250% */
    text-align: center;
    color: rgba(255, 255, 255, 0.7);
`
const LinkLetter03 = styled(Box)`
    display: flex;
    justify-content: center;
    font-size: 50px;
    color: #F5841F;
`
const LeaderBox = styled(Box)`
    display: flex;
    width: 170px;
    height: 50px;
    margin-left: 20%;
    @media (max-width: 1400px) {
        transition: 0.5s;
        margin-left: 40%;
    }
    @media (max-width: 1200px) {
        transition: 0.5s;
        margin-left: 40%;
    }
    @media (max-width: 600px) {
        transition: 0.5s;
        font-size: 8px;
        width: 140px;
        height: 40px;
        margin-left: 30%;
    }
    @media (max-width: 450px) {
        transition: 0.5s;
        font-size: 8px;
        margin-left: 20%;
    }

`
const LetterBox01 = styled(Box)`
    display: flex;
    color: white;
    font-weight: 400;
    font-family: 'Russo One';
    font-size: 22px;
    line-height: 27px;
`

const LetterBox02 = styled(Box)`
    display: flex;
    justify-content: space-between;
    margin-top: 30px;
    flex-direction: row;
    @media (max-width: 700px) {
        transition: 0.5s;
        flex-direction: column;
    }
`
const LetterBox03 = styled(Box)`
    display: flex;
    flex-direction: column;
    @media (max-width: 700px) {
        transition: 0.5s;
        margin-top: 30px;
    }
`
const LetterBox04 = styled(Box)`
    display: grid;
    margin-top: 30px;
    width: 100%;
    justify-content: space-between;
    grid-template-columns: auto auto auto auto;
    @media (max-width: 700px) {
        transition: 0.5s;
        grid-template-columns:   auto auto;
        grid-template-rows: 80px;
    }
`
const LetterBox05 = styled(Box)`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    margin-top: 10px;

    @media (max-width: 500px) {
        transition: 0.5s;
        flex-direction: column;
        >div:nth-child(1){
            width: 90%;
        }
        >div:nth-child(2){
            margin-top: 10px;
            width: 100%;
        }
    }
    @media (max-width: 400px) {
        transition: 0.5s;
        flex-direction: column;
        >div:nth-child(1){
            width: 87%;
        }
        >div:nth-child(2){
            margin-top: 10px;
            width: 100%;
        }
    }
`
const GraphBox01 = styled(Box)`
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    @media (max-width: 500px) {
        transition: 0.5s;
        flex-direction: column;
        margin-bottom: 30px;
        >div:nth-child(2){
            margin-top: 10px;
            margin-bottom: 10px;
        }
    }
`
const LetterBox06 = styled(Box)`
    display: flex;
    @media (max-width: 500px) {
        transition: 0.5s;
        display: none;
    }
`
const LetterBox07 = styled(Box)`
    display: none;
    @media (max-width: 500px) {
        transition: 0.5s;
        display: flex;
        justify-content: space-between;
        >div:nth-child(1){
            font-size: 14px;
        }
        >div:nth-child(2){
            font-size: 20px;
        }
        >div:nth-child(3){
            font-size: 14px;
        }
    }
`
const TableBox01 = styled(Box)`
    display: flex;
    width: 100%;
    flex-direction: column;
    /* max-width: 1200px; */
    /* overflow-x: auto; */
`

export default Content;
