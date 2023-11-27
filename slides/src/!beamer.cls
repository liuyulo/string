\ProvidesClass{!beamer}[2023/11/25]
% \LoadClass[handout]{beamer}
\LoadClass{beamer}

\setbeameroption{show notes on second screen=right}

\setbeamercolor{frame number in head/foot}{fg=black}
\setbeamerfont{frame number in head/foot}{size=\small}
\setbeamertemplate{navigation symbols}{}
\setbeamertemplate{footline}[frame number]

% for lstlisting
\newenvironment{fr}[1][]{\begin{frame}[fragile,environment=fr,#1]}{\end{frame}}

