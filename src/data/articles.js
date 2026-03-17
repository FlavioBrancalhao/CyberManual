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
        title: "TCP vs UDP (1)",
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
        title: "SYN Flood (2)",
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
        title: "LAN X WAN (3)",
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
        title: "Modelo Osi (4)",
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
    title: "TCP/IP (5)",
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
        title:"NAT (6)" ,
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
        title: "Público x privado (7)" ,
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
    {
        id: 8 ,
        title: "IP / máscara/ gateway (8)",
        category: "Rede" ,
        comandosPowershell: "ipconfig , verificar ipv6: ping -6" ,
        comandosWR: "ncpa.cpl" ,
        how: `🔧 1️⃣ Abrir configurações de rede

Pressione Windows + R

Digite:

ncpa.cpl

Vai abrir Conexões de Rede.

🌐 2️⃣ Abrir propriedades da placa de rede

Clique com botão direito na sua conexão

Ethernet ou Wi-Fi

Clique em Propriedades

Procure por:

Protocolo IP Versão 6 (TCP/IPv6)

Selecione e clique em Propriedades.

🧠 3️⃣ Configurar IPv6 manual

Marque:

Usar o seguinte endereço IPv6

Exemplo de configuração:

Endereço IPv6

2001:db8:1:1::10

Comprimento do prefixo

64

Gateway padrão

2001:db8:1:1::1

Servidor DNS

2001:4860:4860::8888
2001:4860:4860::8844

Esses DNS são do Google.

🔍 4️⃣ Verificar IPv6 configurado

No Prompt de comando:

ipconfig

Vai aparecer algo como:

IPv6 Address . . . . . . . . . : 2001:db8:1:1::10
🧪 5️⃣ Testar IPv6

Teste com ping:

ping -6 google.com

ou direto no IP:

ping 2001:4860:4860::8888
📚 Estrutura de um IPv6

Exemplo:

2001:0db8:0001:0001:0000:0000:0000:0010

Forma reduzida:

2001:db8:1:1::10

Regras:

128 bits

8 blocos

hexadecimal

🧠 Tipos de IPv6 (importante para redes)
Tipo	Exemplo	Uso
Link-Local	fe80::	rede local
Global	2001::	internet
Loopback	::1	localhost
Multicast	ff00::	grupos

💡 Dica para entrevista de redes / cyber:

Pergunta comum:

Qual comando testa IPv6?

Resposta:

ping -6` ,
        content: `🌐 IP 

É o endereço do dispositivo na rede. 

Exemplo: 
192.168.1.10 

Serve para identificar quem envia e quem recebe dados. 

 

🧮 Máscara 

Define qual parte do IP é rede e qual parte é máquina (host). 

Exemplo: 
255.255.255.0 (ou /24) 

Se dois dispositivos têm os 3 primeiros números iguais nesse caso, estão na mesma rede. 

 

🚪 Gateway 

É o roteador da rede. 

Ele é usado quando você quer falar com outra rede (ex: internet). `
    },
    {
    id: 9 ,
        title: "DNS (9)",
        category: "Protocolo de rede (9)" ,
        comandosPowershell: "comandos para verificar DNS : nslookup google.com , nslookup google.com 8.8.8.8 , ping google.com , ipconfig /all , ipconfig /flushdns , ipconfig /displaydns , tracert google.com" ,
        comandosWR:"N/A" ,
        how: "N/A" ,
        content: `🔹 O que é DNS? 

DNS (Domain Name System) é o sistema responsável por traduzir nomes de domínio em endereços IP. 

Exemplo: 
Quando você digita google.com, o DNS traduz para algo como 142.250.190.78. 

Sem DNS, você teria que decorar IP de todos os sites 😅 

 

🔹 Porta 53 

📌 Porta padrão: 53 

📌 Protocolo: UDP (principalmente) 

📌 Pode usar TCP também 

 

🔵 DNS via UDP (mais comum) 

Usado para consultas rápidas 

Mais leve e rápido 

Ideal para requisições pequenas 

Exemplo: Quando seu PC pergunta qual o IP do site. 

 

🟠 DNS via TCP 

Usado quando: 

A resposta é muito grande 

Transferência de zona (entre servidores DNS) 

Algumas validações de segurança (DNSSEC) 

 

🔹 Como funciona na prática 

Você digita um site 

Seu PC consulta o servidor DNS (porta 53) 

O DNS responde com o IP 

Seu navegador conecta ao IP usando TCP (porta 80 ou 443) 

 

🔐 Segurança e ataques comuns 

Como você está estudando redes e segurança, isso é importante: 

🔥 DNS Spoofing – Resposta falsa para redirecionar a vítima 

🔥 DNS Amplification Attack – Ataque DDoS usando UDP 

🔥 Túnel DNS (DNS Tunneling) – Exfiltração de dados pela porta 53 `
    },
    {
        id: 10 ,
        title: "HTTP - HTTPs (10)",
        category: "Protocolo de rede (10)" ,
        comandosPowershell: "N/A" ,
        comandosWR:"N/A" ,
        how: "N/A" ,
        content: `🔹 HTTP  (80) / HTTPS (443) 

São protocolos usados para transferência de páginas web entre cliente (navegador) e servidor. 

 

🔵 HTTP (HyperText Transfer Protocol) 

📌 Porta: 80 

📌 Protocolo de transporte: TCP 

📌 Comunicação não criptografada 

Isso significa que os dados trafegam em texto claro. 

⚠️ Risco: 

Se alguém interceptar o tráfego (ex: MITM), consegue ver: 

Login 

Senha 

Cookies 

Dados enviados em formulários 

 

🟢 HTTPS (HTTP Secure) 

📌 Porta: 443 

📌 Usa TCP 

📌 Utiliza SSL/TLS para criptografia 

📌 Comunicação criptografada 

HTTPS = HTTP + TLS 

Mesmo que alguém intercepte o tráfego, os dados estarão criptografados. 

 

🔹 Como funciona o HTTPS (resumido) 

1️⃣ Cliente conecta ao servidor 
2️⃣ O servidor envia o certificado digital 
3️⃣ O cliente valida o certificado 
4️⃣ É criado um canal criptografado (Handshake TLS) 
5️⃣ Dados passam a ser enviados com criptografia 

 

🔐 Segurança (ponto forte para entrevista) 

Ataques relacionados: 

🔥 SSL Stripping (força downgrade para HTTP) 

🔥 Certificado falso 

🔥 MITM 

🔥 Roubo de sessão (Session Hijacking) 


🧠 Resumo

HTTP → porta 80 → sem criptografia 

HTTPS → porta 443 → usa TLS 

Ambos usam TCP 

Trabalham na Camada 7 (Aplicação)  `
    },
     {
        id: 11 ,
        title: "SMB (11)",
        category: "Protocolo de rede" ,
        comandosPowershell: "N/A" ,
        comandosWR:"N/A" ,
        how: `📁 1️⃣ Criar a pasta

Clique com botão direito no Desktop ou em qualquer diretório

Novo → Pasta

Nomeie, por exemplo:

Compartilhamento
🔗 2️⃣ Ativar o compartilhamento SMB

Clique com botão direito na pasta

Propriedades

Aba Compartilhamento

Clique em Compartilhamento Avançado

Marque:

☑ Compartilhar esta pasta

Nome do compartilhamento:

Compartilhamento

Clique em Permissões.

🔐 3️⃣ Configurar permissões SMB

Aqui você define quem pode acessar pela rede.

Exemplo:

Usuário	Permissão
Everyone	Leitura
User	Controle total

Permissões possíveis:

Leitura → apenas ver arquivos

Alteração → modificar arquivos

Controle total → acesso completo

🛡️ 4️⃣ Ajustar permissões NTFS (muito importante)

Mesmo com SMB, o Windows também usa permissões NTFS.

Vá na aba Segurança

Clique Editar

Adicione o usuário ou grupo

Exemplo:

Users → Modificar
Administrators → Controle total

⚠️ Regra importante:

A permissão final = combinação de SMB + NTFS.

🌐 5️⃣ Acessar a pasta na rede

Em outro computador:

\\IP_DO_COMPUTADOR\Compartilhamento

Exemplo:

\\192.168.0.10\Compartilhamento

Ou:

\\NOME-PC\Compartilhamento
🔎 6️⃣ Ver compartilhamentos existentes

No Prompt de comando:

net share

Mostra todas as pastas compartilhadas.

➕ 7️⃣ Criar compartilhamento via CMD (admin)
net share Compartilhamento=C:\Compartilhamento /grant:everyone,full

Isso cria um compartilhamento SMB direto pelo terminal.

🧠 Conceito importante (rede / cyber)

SMB = Server Message Block

Portas usadas:

445 TCP → SMB moderno

139 TCP → SMB antigo (NetBIOS)

Comando para verificar portas:

netstat -an | find "445"`, 
        content: `SMB  (Server Message Block) 

SMB é o protocolo usado para: 

📂 Compartilhamento de arquivos 

🖨 Compartilhamento de impressoras 

🖥 Comunicação entre máquinas Windows na rede 

Muito comum em ambientes corporativos. 

 

🔹 Porta padrão 

📌 445 

📌 Protocolo: TCP 

Antigamente usava a 139 (NetBIOS), mas hoje o padrão é 445. 

 

🔹 Onde é usado? 

Pastas compartilhadas na rede 

Acesso a arquivos de servidor 

Autenticação em domínio Windows 

Comunicação com Active Directory 

Exemplo: 

\\servidor\pasta_compartilhada 

 

🔐 Segurança (MUITO importante) 

SMB é uma das portas mais exploradas da história. 

Ataques famosos: 

🔥 WannaCry (2017) → explorava falha no SMB 

🔥 EternalBlue exploit 

🔥 Movimentação lateral em redes corporativas 

🔥 Enumeração de usuários e compartilhamentos 

O ransomware WannaCry explorou uma vulnerabilidade no SMB e afetou o mundo inteiro. 

 

🛡️ Boas práticas 

❌ Nunca expor porta 445 na internet 

✅ Desabilitar SMBv1 

✅ Atualizar Windows 

✅ Restringir via firewall 

✅ Monitorar tentativas de acesso   `
    },
    {
        id: 12 ,
        title: "RDP (12)",
        category: "Protocolo de rede" ,
        comandosPowershell: "N/A" ,
        comandosWR:"N/A" ,
        how: ``,
        content:`RDP (Remote Desktop Protocol) 

RDP é o protocolo usado para acessar outro computador remotamente com interface gráfica, como se você estivesse sentado na frente dele. 

Muito usado em servidores Windows. 

 

🔹 Porta padrão 

📌 Porta: 3389 

📌 Protocolo: TCP (principal) 

📌 Também pode usar UDP (versões mais novas para melhorar desempenho) 

 

🔹 Para que serve? 

Acessar servidor Windows remotamente 

Suporte técnico 

Administração de servidores 

Trabalhar remotamente em outro PC 

Exemplo real: 

Você conecta no computador da empresa de casa e vê a tela completa dele. 

 

🔹 Como funciona (simplificado) 

1️⃣ Cliente RDP inicia conexão 
2️⃣ Servidor valida usuário e senha 
3️⃣ Sessão gráfica é transmitida pela rede 
4️⃣ Teclado e mouse são enviados ao servidor 

 

🔐 Segurança (MUITO importante) 

RDP é um dos serviços mais atacados da internet. 

Ataques comuns: 

🔴 Brute Force (tentativa de senha) 

🔴 Credential stuffing 

🔴 Exploração de falhas (ex: BlueKeep) 

🔴 Acesso inicial para ransomware 

 

🛡️ Boas práticas 

✅ Não expor porta 3389 direto na internet 

✅ Usar VPN antes do RDP 

✅ Ativar MFA 

✅ Alterar porta padrão 

✅ Limitar IP no firewall 

✅ Usar NLA (Network Level Authentication) 


🧠 Resumo estilo entrevista 

RDP → acesso remoto gráfico 

Porta 3389 

Usa TCP/UDP 

Muito usado em ambientes Windows 

Alto risco se exposto sem proteção 

Se quiser, posso te passar um mapa mental das portas mais cobradas em entrevista de redes/SOC (DNS, DHCP, HTTP, SSH, RDP, etc.) que ajuda muito a memorizar rápido. 

🔹 SMB  (Server Message Block) 

SMB é o protocolo usado para: 

📂 Compartilhamento de arquivos 

🖨 Compartilhamento de impressoras 

🖥 Comunicação entre máquinas Windows na rede 

Muito comum em ambientes corporativos. 

 

🔹 Porta padrão 

📌 445 

📌 Protocolo: TCP 

Antigamente usava a 139 (NetBIOS), mas hoje o padrão é 445. 

 

🔹 Onde é usado? 

Pastas compartilhadas na rede 

Acesso a arquivos de servidor 

Autenticação em domínio Windows 

Comunicação com Active Directory 

Exemplo: 

\\servidor\pasta_compartilhada 

 

🔐 Segurança (MUITO importante) 

SMB é uma das portas mais exploradas da história. 

Ataques famosos: 

🔥 WannaCry (2017) → explorava falha no SMB 

🔥 EternalBlue exploit 

🔥 Movimentação lateral em redes corporativas 

🔥 Enumeração de usuários e compartilhamentos 

O ransomware WannaCry explorou uma vulnerabilidade no SMB e afetou o mundo inteiro. 

 

🛡️ Boas práticas 

❌ Nunca expor porta 445 na internet 

✅ Desabilitar SMBv1 

✅ Atualizar Windows 

✅ Restringir via firewall 

✅ Monitorar tentativas de acesso `

    },
        {
        id: 13 ,
        title: "Firewall (13)",
        category: "Rede" ,
        comandosPowershell: `Ver status do firewall: netsh advfirewall show allprofiles, Ativar firewall: netsh advfirewall set allprofiles state on, Desativar firewall: netsh advfirewall set allprofiles state off, Listar todas as regras: netsh advfirewall firewall show rule name=all, Liberar porta (exemplo porta 80): netsh advfirewall firewall add rule name="Liberar Porta 80" dir=in action=allow protocol=TCP localport=80, Bloquear porta: netsh advfirewall firewall add rule name="Bloquear Porta 80" dir=in action=block protocol=TCP localport=80, ` ,
        comandosWR:"Abrir Firewall do Windows : firewall.cpl, opções avançadas: wf.msc" ,
        how: `N/A`,
        content:`🔥 O que é Firewall? 

Um Firewall é um sistema de segurança que controla o tráfego de rede, permitindo ou bloqueando conexões com base em regras definidas. 

Ele funciona como um porteiro da rede 🚪 
Decide quem entra, quem sai e o que pode passar. 

 

🧠 Em que camada ele atua? 

Depende do tipo: 

Camada 3 (Rede) → Filtra por IP 

Camada 4 (Transporte) → Filtra por porta (TCP/UDP) 

Camada 7 (Aplicação) → Firewalls mais avançados (Next-Gen) 

 

🛡️ Tipos de Firewall 

🔹 Firewall de Pacotes (Packet Filtering) 

Analisa IP, porta e protocolo. 

Simples e rápido. 

Exemplo: regras no roteador doméstico. 

 

🔹 Stateful Firewall 

Mantém controle do estado da conexão. 

Sabe se a comunicação foi iniciada de dentro ou de fora. 

Muito usado em empresas. 

 

🔹 NGFW (Next-Generation Firewall) 

Inspeção profunda de pacotes (DPI) 

Controle por aplicação 

IDS/IPS 

Pode integrar com autenticação de usuário 

Exemplo de fabricantes: 

Fortinet 

Palo Alto Networks 

Cisco 

 

⚙️ O que um Firewall pode fazer? 

Bloquear portas específicas (ex: 23 - Telnet) 

Permitir apenas IPs confiáveis 

Bloquear tráfego externo não solicitado 

Criar regras por horário 

Controlar acesso à internet 

Prevenir ataques (SYN Flood, brute force) 

 

📌 Exemplo prático 

Sem firewall: 

Qualquer pessoa na internet pode tentar acessar sua rede. 

Com firewall: 

Apenas conexões permitidas passam. 

Se alguém tentar acessar a porta 3389 (RDP), pode ser bloqueado. `
    },
    {
        id: 14 ,
        title: "SSL e TLS (14)",
        category: "Protocolo de rede" ,
        comandosPowershell: `N/A ` ,
        comandosWR:"N/A" ,
        how: `N/A`,
        content:`🔐 SSL e TLS

SSL e TLS são protocolos de segurança na internet.

Eles criptografam os dados para que ninguém consiga ler a comunicação.

🌐 Exemplo

Quando você acessa um site:

https://site.com

O HTTPS usa TLS para proteger a conexão. 🔒

📌 Diferença

SSL → protocolo antigo (não usado mais)

TLS → versão mais nova e segura

🧠 Em uma frase (boa para entrevista)

SSL e TLS são protocolos que criptografam a comunicação na internet; hoje o TLS é o padrão usado para proteger conexões como HTTPS.

⚡ Porta usada

HTTPS / TLS → porta 443

Se quiser, Bsnaga, eu também posso te fazer um mapa mental rápido de protocolos importantes (DNS, DHCP, HTTP, HTTPS, TCP, UDP) que caem muito em entrevista de suporte e redes.`
    },
        {
        id: 15,
        title: "Switch vs Roteador (15)",
        category: "Protocolo de rede" ,
        comandosPowershell: `N/A ` ,
        comandosWR:"N/A" ,
        how: `N/A`,
        content:`Switch vs 🌐 Roteador (Router) 

🔹 Switch 

Atua principalmente na Camada 2 (Enlace) do modelo OSI. 

Conecta dispositivos dentro da mesma rede local (LAN). 

Usa endereço MAC para encaminhar os dados. 

Não cria redes diferentes, apenas distribui a comunicação interna. 

📌 Exemplo: 
No seu escritório, o switch conecta computadores, impressoras e servidores para que todos conversem entre si. 

 

🔹 Roteador (Router) 

Atua principalmente na Camada 3 (Rede) do modelo OSI. 

Conecta redes diferentes. 

Usa endereço IP para encaminhar os pacotes. 

Faz a comunicação entre sua rede local e a internet. 

Pode fazer: 

NAT 

DHCP 

Firewall básico 

📌 Exemplo: 
Seu roteador conecta sua casa à internet do provedor. 

 

🔎 Diferença principal 

Switch 


Liga dispositivos na mesma rede 

Usa MAC Address 

Trabalha na LAN 



Roteador 


Liga redes diferentes 

Usa IP Address 

Conecta LAN à WAN 



`
    },
]
