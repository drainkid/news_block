import {Button, Card, Checkbox, Space, Tag, Typography} from "antd";
import {ClockCircleOutlined, GlobalOutlined, MailOutlined, UserOutlined} from '@ant-design/icons'
import React from "react";
import {IData_SnippetNews} from "../../utils/types.ts";

interface newsProps {
    newsData:IData_SnippetNews
}

const NewsBlock:React.FC<newsProps> = ({newsData}) => {



    const { Title, Text,
        Paragraph, Link } = Typography

    const keywords = newsData.KW


    const highlightWords = (text: string)  => {
        const parts = text.split(/(<kw>.*?<\/kw>)/g)

        return (
            <>
                {parts.map((part) => {
                    const match = /^<kw>(.*?)<\/kw>$/.exec(part)
                    if (match) {
                        return (
                            <Tag color="blue-inverse">
                                {match[1]}
                            </Tag>
                        )
                    }
                    return <React.Fragment>{part}</React.Fragment> // ключ в данном случае необязателен т.к изменений списка не будет
                })}
            </>
        )
    }


    return (
        <div>
            <Card
                title={
                    <Space direction="vertical">
                        <Text type= 'secondary' style={{marginBottom:'2px', color:'lightgrey'}}>{newsData.REACH} reach Top Traffic: {newsData.TRAFFIC.map((item) => item.value + ' ' + item.count + ' ')}</Text>
                        <Title level={5} style={{ marginTop: 4, color:'#1677ff' }}>
                            {newsData.TI}
                        </Title>
                        <Space wrap size="small">
                            <GlobalOutlined style={{color:'lightgrey'}}/>
                            <Link href={newsData.URL} style={{fontSize:'small',textDecoration:'underline'}}>
                                {newsData.DOM}
                            </Link>
                            <Text style={{color:'lightgrey'}}>{newsData.CNTR}</Text>
                            <Text style={{color:'lightgrey'}}> <MailOutlined/> {newsData.LANG}</Text>
                            <UserOutlined style={{color:'lightgrey'}}/>
                            <Text style={{color:'lightgrey'}}>{newsData.AU}</Text>
                        </Space>
                    </Space>
                }
                style={{ width: '100%', maxWidth: 900, margin: '80px auto',background:'none', borderColor:'grey'}}
                extra={
                    <Space wrap size={'small'} style={{marginBottom:'50px'}}> <Tag color="green" > Positive</Tag>
                        <Checkbox style={{background:'none'}}>

                        </Checkbox>
                    </Space>
            }
            >
                <Space direction={'vertical'} size={'middle'}>

                    <Paragraph ellipsis={{ rows: 3,
                        expandable: true,
                        symbol: <span style={{ color: '#1890ff' }}>Show more</span>,
                    }} style={{color:'white'}}>
                        {newsData.HIGHLIGHTS.map((item) => (highlightWords(item)))}
                    </Paragraph>

                        <Space wrap>
                        {keywords.map((word) => (
                            <Tag key={word.value} style={{background:'none', color:'grey'}}> <UserOutlined/> {word.value} {word.count}</Tag>
                        ))}
                        <Link>Show All +9</Link>
                        </Space>

                    <Space direction="vertical" style={{ width: '100%' }} size={'small'}>
                        <Button variant="link" style={{background:'#302f2f',color:'#1677ff'}}>Original Source</Button>
                        <Text style={{color:'lightgrey'}}>Duplicates: 192</Text>
                    </Space>
                </Space>

                <Card type="inner" style={{ marginTop: 16, borderColor:'#1677ff',background:'none' }}>
                    <Space direction="vertical" style={{ width: '100%' }}>
                        <Space wrap>
                            <ClockCircleOutlined style={{color:'lightgrey'}} />
                            <Text style={{color:'lightgrey'}}>18 Jun 2024</Text>
                            <Text style={{color:'lightgrey'}}>211K Top Reach</Text>
                        </Space>

                        <Title level={5} style={{ marginTop: 4, color:'#1677ff' }}>
                            Antivirus leggero: i migliori e più efficaci (free e a pagamento) 2024
                        </Title>

                        <Space wrap>
                            <GlobalOutlined style={{color:'lightgrey'}} />
                            <Text style={{color:'lightgrey'}}>ria.ru</Text>
                            <Text style={{color:'lightgrey'}}>Austria</Text>
                            <UserOutlined style={{color:'lightgrey'}}/>
                            <Text style={{color:'lightgrey'}}>Emily C., Taormina A., et al.</Text>
                        </Space>
                    </Space>
                </Card>
                <Button size='large'  style={{ marginTop: 8, width: '100%', color:'white', background:'none' }}>
                    View Duplicates
                </Button>
            </Card>
        </div>
    );
};

export default NewsBlock;