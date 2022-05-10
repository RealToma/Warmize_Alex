import React, { useEffect, useState } from "react";
import { Box } from '@material-ui/core';
import styled from "styled-components";
import IMG_Leftback from "../../assets/images/Frame 1.png";
import IMG_Rightback from "../../assets/images/Frame 2.png";
import IMG_Logo from "../../assets/images/logo 7.png";
import CustomBtn from '../../components/CustomBtn';
import { useWeb3React } from "@web3-react/core";
import { injected, walletConnect, trustWallet, binance_wallet } from "../../utils/connectors";


const Topbar = () => {
    const DESKTOP_CONNECTORS = {
        MetaMask: injected,
        WalletConnect: walletConnect,
        BinanceWallet: binance_wallet,
        TrustWallet: trustWallet,
    };
    const walletConnectors = DESKTOP_CONNECTORS;
    const [addr, set_addr] = useState("CONNECT");
    const { account, active, activate } = useWeb3React();
    const connect = async (currentConnector) => {
        try {
            await activate(walletConnectors[currentConnector]);
            window.localStorage.setItem("CurrentWalletConnect", currentConnector);
        }
        catch (e) {
            console.log(e);
        }
    }
    const set_account_addr = (addr) => {
        return addr.slice(0, 6) + "..." + addr.slice(-4);
    }

    useEffect(() => {
        if (active) {
            set_addr(set_account_addr(account))
        }
        else {
            set_addr("CONNECT");
        }
    }, [active,account])
    return (
        <StyledComponent>
            <BackgroundBox>
                <BackImgPart>
                    <img src={IMG_Leftback} width="100%" height="100%" alt='' />
                </BackImgPart>
                <BackImgPart>
                    <img src={IMG_Rightback} width="100%" height="100%" alt='' />
                </BackImgPart>
            </BackgroundBox>

            <CenterPart>
                <EmptyBox></EmptyBox>
                <LogoPart>
                    <img src={IMG_Logo} width="199px" height="56px" alt='' />
                </LogoPart>
                <LinkPart>
                    <LinkLetter>Home</LinkLetter>
                    <LinkLetter>Docs</LinkLetter>
                    <LinkLetter>Staking</LinkLetter>
                    <LinkLetter>Launchpads</LinkLetter>
                    <LinkLetter>Marketplace</LinkLetter>
                </LinkPart>
                <ButtonPart ml={"20px"} mr={"20px"}>
                    <ButtonBox>
                        <CustomBtn width={"100%"} height="100%" str="BUY $WARMIZ" fsize={"16px"} fcolor={"white"} bgcolor="black" border="1.5px solid rgba(255, 255, 255, 0.7)" fweight={"400"} ffamily={'Russo One'} lheight={"19px"} />
                    </ButtonBox>
                    <ButtonBox01 onClick={() => {
                        connect("MetaMask");
                    }}>
                        <CustomBtn width={"100%"} height="100%" str={addr} fsize={"16px"} fcolor={"black"} bgcolor="white" border="1.5px solid rgba(255, 255, 255, 0.7)" fweight={"400"} ffamily={'Russo One'} lheight={"19px"} />
                    </ButtonBox01>
                </ButtonPart >
                <EmptyBox></EmptyBox>
            </CenterPart>

        </StyledComponent >
    );
}

const StyledComponent = styled(Box)`
    display: flex;
    width: 100%;
    height: 110px;
    align-items: center;

`
const BackImgPart = styled(Box)`
    display: flex;
    width: 252px;
    height: 100%;
`
const CenterPart = styled(Box)`
    display: flex;
    width: 100%;
    height: 100%;
    position: absolute;
`
const LogoPart = styled(Box)`
    display: flex;
    flex: 1;
    width: 100%;
    height: 100%;
    justify-content: center;
    align-items: center;
`
const LinkPart = styled(Box)`
    display: flex;
    flex: 2;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    @media (max-width: 900px) {
        transition: 0.5s;
        display: none;
    }
`
const LinkLetter = styled(Box)`
    display: flex;
    /* flex: 1; */
    color: white;
    align-items: center;
    justify-content: center;
    font-family: 'Russo One';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    &:hover{
        cursor: pointer;
        color: #F5841F;
        transition: .5s;
    }
    @media (max-width: 1000px) {
        transition: 0.5s;
        font-size: 12px;
    }
    
`
const ButtonBox = styled(Box)`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 170px;
    height: 50px;
    @media (max-width: 1000px) {
        transition: 0.5s;
        width: 150px;
        height: 40px;
    }
    @media (max-width: 700px) {
        transition: 0.5s;
        display: none;
    }
`

const ButtonBox01 = styled(Box)`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 170px;
    height: 50px;
    @media (max-width: 1000px) {
        transition: 0.5s;
        width: 150px;
        height: 40px;
    }
    @media (max-width: 400px) {
        transition: 0.5s;
        width: 100px;
        height: 40px;
    }
`

const ButtonPart = styled(Box)`
    display: flex;
    flex: 1.7;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    @media (max-width: 900px) {
        transition: 0.5s;
        flex: 1;
    }
    @media (max-width: 700px) {
        transition: 0.5s;
        justify-content: center;
        flex: 1;
    }
`

const BackgroundBox = styled(Box)`
    display: flex;
    width: 100%;
    height: 100%;
    justify-content: space-between;
    position: relative;
`

const EmptyBox = styled(Box)`
    display: flex;
    flex: 1;
    @media (max-width: 1400px) {
        transition: 0.5s;
        display: none;
    }
`


export default Topbar;
