import React, { useState } from 'react';
import { User, Cpu, Globe, Database, BatteryCharging } from 'lucide-react';

const Work = () => {
    const [osInfo, setOsInfo] = useState(null);
    const [displayType, setDisplayType] = useState(null); // 'userInfo', 'architecture', etc.
    const [loading, setLoading] = useState(false);

    const fetchInfo = async (type) => {
        setLoading(true);
        setDisplayType(type);
        try {
            const res = await fetch('/api/os-info');
            const data = await res.json();
            setOsInfo(data);
        } catch (error) {
            console.error("Error fetching OS info:", error);
        } finally {
            setLoading(false);
        }
    };

    const renderInfo = () => {
        if (loading) return <p>Loading...</p>;
        if (!osInfo || !displayType) return null;

        let icon = null;
        let infoText = "";

        switch (displayType) {
            case 'userInfo':
                icon = <User size={64} />;
                infoText = `User: ${osInfo.userInfo.username} (UID: ${osInfo.userInfo.uid})`;
                break;
            case 'architecture':
                icon = <Cpu size={64} />;
                infoText = `Architecture: ${osInfo.architecture}`;
                break;
            case 'hostname':
                icon = <Globe size={64} />;
                infoText = `Hostname: ${osInfo.hostname}`;
                break;
            case 'totalMemory':
                icon = <Database size={64} />;
                infoText = `Total Memory: ${(osInfo.totalMemory / (1024 * 1024 * 1024)).toFixed(2)} GB`;
                break;
            case 'freeMemory':
                icon = <BatteryCharging size={64} />; // Using Battery as closest metaphor for available resource
                infoText = `Free Memory: ${(osInfo.freeMemory / (1024 * 1024 * 1024)).toFixed(2)} GB`;
                break;
            default:
                return null;
        }

        return (
            <div className="info-display">
                {icon}
                <h2>{infoText}</h2>
            </div>
        );
    };

    return (
        <div className="page-container work-page">
            <h1>IOS with React.JS</h1>
            <div className="button-group">
                <button onClick={() => fetchInfo('userInfo')}>User Info</button>
                <button onClick={() => fetchInfo('architecture')}>Architecture</button>
                <button onClick={() => fetchInfo('hostname')}>Hostname</button>
                <button onClick={() => fetchInfo('totalMemory')}>Total Memory</button>
                <button onClick={() => fetchInfo('freeMemory')}>Free Memory</button>
            </div>
            <div className="result-container">
                {renderInfo()}
            </div>
        </div>
    );
};

export default Work;
