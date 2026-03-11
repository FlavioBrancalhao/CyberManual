export const articles = [

    /* id: ,
        title: ,
        category: ,
        comandosPowershell: ,
        comandosWR: ,
        how: ,
        content: 


        
    
    */ 

    {
        id: 1,
        title: "TCP vs UDP",
        category: "Rede",
        comandosPowershell: "N/A",
        comandosWR: "N/A",
        how: "N/A",
        content: `
TCP (Transmission Control Protocol)

- Conexão confiável
- Confirma entrega
- Mais lento

UDP (User Datagram Protocol)

- Não confiável
- Mais rápido
- Usado em streaming
`
        
       
    },

    {
        id: 2,
        title: "SYN Flood",
        category: "Ataques",
        comandosPowershell: "N/A",
        comandosWR: "N/A",
        how: "N/A",
        content: `
SYN Flood é um ataque de negação de serviço (DoS).

O atacante envia vários pacotes SYN para um servidor
sem completar o handshake TCP.

Isso deixa conexões abertas e consome recursos do servidor.
`
    },
    {
    id: 3,
        title: "LAN X WAN",
    category: "Rede" ,
        comandosPowershell: "Ver dispositivos conectado: arp -a,testar rotas, tracert google.com",
        comandosWR: "N/A",
        how: "N/A",
        content: `🏠 LAN (Local Area Network) 

Rede local, limitada a uma área pequena. 

Exemplos típicos: 

-Casa
-Escritório 
-Escola 
-Empresa 

Características: 
✔ Alta velocidade (100 Mbps → 10+ Gbps) 
✔ Baixa latência 
✔ Curta distância 
✔ Controle privado 
✔ Custo menor 

Tecnologias comuns: 

Ethernet 

Wi-Fi 

Exemplo prático: 
Seu notebook + celular + impressora conectados ao mesmo roteador. 

🌎 WAN (Wide Area Network) 

Rede de longa distância, conecta múltiplas LANs. 

Exemplos típicos: 

Internet 

Redes corporativas entre filiais 

MPLS de operadoras 

Características: 
✔ Grande cobertura geográfica 
✔ Latência maior 
✔ Velocidade variável 
✔ Dependência de provedores 
✔ Custo maior `
    },
    {
        id: 4,
        title: "Modelo Osi",
        category: "Rede",
        comandosPowershell: "N/A" ,
        comandosWR: "N/A",
        how: "N/A",
        content: `
O Modelo OSI foi criado pela International Organization for Standardization (ISO) para
padronizar a comunicação entre sistemas em rede.
Ele divide a comunicação em 7 camadas, da física até a aplicação.

        🧱 Explicação Resumida das Camadas

1️⃣ Física → Transmite bits (cabos, sinais elétricos). 
2️⃣ Enlace → Endereço MAC e comunicação local. 
3️⃣ Rede → Endereço IP e roteamento. 
4️⃣ Transporte → Entrega dos dados (TCP/UDP, portas). 
5️⃣ Sessão → Controla início e fim da conexão. 
6️⃣ Apresentação → Criptografia e formatação dos dados. 
7️⃣ Aplicação → Interface com o usuário (HTTP, FTP, DNS). `
    },
    {
    id: 5,
    title: "TCP/IP",
    category: "Rede",
        comandosPowershell: "Ver conexões TCP abertar: netstat -an ",
    comandosWR: "N/A",
    how: "N/A",
        content: ` 
🧱 As 4 Camadas do TCP/IP 

1️⃣ Acesso à Rede 

Equivale à Física + Enlace do OSI. 

Responsável por: 

MAC 

Ethernet 

Wi-Fi 

ARP 

Aqui os dados viram quadros (frames). 

 

2️⃣ Internet 

Responsável por: 

IP 

ICMP 

Roteamento 

Aqui os dados viram pacotes. 

Roteadores trabalham aqui. 

 

3️⃣ Transporte 

Responsável por: 

TCP (confiável) 

UDP (rápido) 

Portas (80, 443, 53, 22…) 

Aqui os dados viram segmentos. 

 

4️⃣ Aplicação 

Responsável por: 

HTTP 

HTTPS 

FTP 

SMTP 

DNS 

Aqui estão os serviços e sistemas. `
    },
    {
        id: 6,
        title:"NAT" ,
        category: "Protocolo",
        comandosPowershell: "N/A",
        comandosWR: "N/A",
        how: "N/A",
        content: ` 

🌐 O que é NAT? 

NAT (Network Address Translation) é o processo que traduza IP privado em IP público. 

Ele acontece no roteador/firewall. 

Permite que vários dispositivos internos usem um único IP público para acessar a internet. 

 

🧠 Por que o NAT existe? 

Porque: 

IPs públicos são limitados (IPv4) 

Empresas e casas usam IPs privados internamente 

Precisa de um “tradutor” para falar com a internet 

 

🏢 Exemplo prático 

Sua rede: 

PC → 192.168.1.10 
Celular → 192.168.1.15 
Notebook → 192.168.1.20 

Todos acessam internet. 

Mas externamente aparece só: 

IP público → 187.45.200.10 

👉 O NAT troca os IPs privados pelo IP público. 

 

🔄 Como funciona na prática 

1️⃣ Seu PC envia pacote para 8.8.8.8 
2️⃣ Roteador troca IP origem: 

De: 192.168.1.10 

Para: 187.45.200.10 
3️⃣ Internet responde 
4️⃣ Roteador devolve para o dispositivo correto 

Ele mantém uma tabela de tradução. 

 

🔐 Tipos de NAT 

🔹 NAT Estático 

1 IP privado ↔ 1 IP público fixo 
Usado para servidores. 

🔹 NAT Dinâmico 

Vários IPs privados ↔ pool de IPs públicos. 

🔹 PAT (Port Address Translation) 

Mais comum em casa. 
Vários dispositivos usam o mesmo IP público, diferenciando por porta. `
    },
    {
        id: 7,
        title: "Público x privado" ,
        category: "Conceito de Rede" ,
        comandosPowershell: "N/A",
        comandosWR: "N/A",
        how: "N/A",
        content: `🌍 Diferença entre IP Público e IP Privado 

🔹 IP Público 

É o IP visível na internet 

É único no mundo 

É fornecido pelo seu provedor 

Pode ser acessado de fora (se não houver bloqueio) 

Exemplo: 
187.23.150.10 

 

🔹 IP Privado 

É usado dentro da sua rede (casa/empresa) 

Não é acessível diretamente da internet 

É definido por faixas reservadas pela Internet Engineering Task Force 

Faixas privadas: 

10.0.0.0 – 10.255.255.255 

172.16.0.0 – 172.31.255.255 

192.168.0.0 – 192.168.255.255 

Exemplo comum: 
192.168.1.10 

 

🎯 Diferença resumida 

IP Público → identifica sua conexão na internet 
IP Privado → identifica seu dispositivo dentro da rede 

O roteador usa NAT para traduzir um no outro. 
 
`
    },

]
