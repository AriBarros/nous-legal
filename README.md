# nous-legal — site institucional (`www.nouslegal.com.br`)

Repositório do site institucional da Nous Legal, hospedado no **Firebase Hosting** (projeto Firebase `nous-legal`).

> ⚠️ **Estado atual: site desativado — o domínio redireciona para a plataforma.**
> Veja [Redirect ativo](#-redirect-ativo-wwwnouslegalcombr--plataforma) abaixo.

---

## 🔁 Redirect ativo (`www.nouslegal.com.br` → plataforma)

Hoje **todas** as URLs de `https://www.nouslegal.com.br` retornam **HTTP 301 (Moved Permanently)** apontando para:

```
https://plataforma.nouslegal.com.br
```

Isso vale para qualquer rota — `/`, `/planos`, `/qualquer/coisa`, etc.

### Por que foi feito assim?

O site institucional foi desativado e a entrada principal do produto passou a ser a plataforma. Optamos pelo **redirect 301 no Firebase Hosting** em vez de mexer no DNS porque:

- **DNS não faz redirect HTTP.** Um `CNAME` de `www` para `plataforma` apenas serviria o conteúdo da plataforma na URL antiga, quebrando cookies, OAuth, SEO e o certificado SSL.
- **301 transfere autoridade de SEO** do domínio antigo para o novo.
- É **fácil de reverter** — basta remover o bloco `redirects` do `firebase.json` e fazer um novo deploy (~1 min).

### Como funciona tecnicamente

A regra está em [`firebase.json`](./firebase.json):

```json
{
  "hosting": {
    "public": "dist",
    "redirects": [
      {
        "source": "**",
        "destination": "https://plataforma.nouslegal.com.br",
        "type": 301
      }
    ],
    "rewrites": [
      { "source": "**", "destination": "/index.html" }
    ]
  }
}
```

O `source: "**"` casa com qualquer caminho. O Firebase Hosting aplica `redirects` **antes** de servir qualquer arquivo, então o React/Vite nem chega a ser carregado quando o redirect está ativo.

### Como **desativar** o redirect (e voltar a servir o site)

1. Remova o bloco `"redirects"` do [`firebase.json`](./firebase.json).
2. Commit + push na `main`. O CI/CD faz o deploy automático.

Ou, mais rápido, reverta o commit que adicionou o redirect:

```bash
git revert <hash-do-commit-do-redirect>
git push origin main
```

---

## 🚀 Deploy

O deploy é **automático** via GitHub Actions: todo push para `main` dispara [`firebase-deploy.yml`](.github/workflows/firebase-deploy.yml), que:

1. Instala dependências (`npm ci`)
2. Builda o projeto (`npm run build` → pasta `dist/`)
3. Faz deploy no canal `live` do Firebase Hosting (projeto `nous-legal`)

A autenticação usa um **service account** armazenado no segredo `FIREBASE_SERVICE_ACCOUNT_NOUS_LEGAL` (Settings → Secrets and variables → Actions).

**Você não precisa de acesso ao Firebase Console para deployar** — basta merge na `main`.

### Deploy manual (caso o CI/CD esteja fora do ar)

Requer Firebase CLI e acesso ao projeto `nous-legal` no Firebase:

```bash
npm ci
npm run build
firebase deploy --only hosting --project nous-legal
```

---

## 🧪 Desenvolvimento local

```bash
npm install
npm run dev      # servidor de dev (Vite)
npm run build    # gera dist/
npm run preview  # serve dist/ localmente para teste
```

Stack: **React + TypeScript + Vite + Tailwind + Radix UI**.

---

## 🌐 Domínio e DNS

- DNS gerenciado no **Registro.br** (zona DNS de `nouslegal.com.br`).
- `www.nouslegal.com.br` → `CNAME` → `nous-legal.web.app` (Firebase Hosting).
- Certificado SSL gerenciado automaticamente pelo Firebase.

> Nenhuma alteração no DNS é necessária para mudar o destino do redirect — tudo é controlado pelo `firebase.json` deste repo.

---

## 👥 Acessos

| Recurso | Onde | Quem tem acesso |
|---|---|---|
| Repositório GitHub | `AriBarros/nous-legal` | Ari Barros (owner), Daniel Mello Farias |
| Firebase Console | projeto `nous-legal` | Owner do projeto (solicitar acesso ao Ari) |
| Deploy via CI/CD | GitHub Actions | Automático — qualquer push em `main` |

Para gerenciar o projeto no Firebase Console (versões antigas, domínios customizados, billing, etc.), peça ao owner para adicionar seu e-mail em **Firebase Console → Settings → Users and permissions**.

---

## ✅ Como testar o redirect

Numa aba anônima (para evitar cache), abra:

- https://www.nouslegal.com.br → deve cair em `plataforma.nouslegal.com.br`
- https://www.nouslegal.com.br/planos → idem

Ou pelo terminal:

```bash
curl -I https://www.nouslegal.com.br
# Esperado: HTTP/2 301
# location: https://plataforma.nouslegal.com.br
```
