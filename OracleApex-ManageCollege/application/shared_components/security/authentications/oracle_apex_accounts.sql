prompt --application/shared_components/security/authentications/oracle_apex_accounts
begin
--   Manifest
--     AUTHENTICATION: Oracle APEX Accounts
--   Manifest End
wwv_flow_imp.component_begin (
 p_version_yyyy_mm_dd=>'2024.11.30'
,p_release=>'24.2.2'
,p_default_workspace_id=>28118185333235957468
,p_default_application_id=>274321
,p_default_id_offset=>0
,p_default_owner=>'WKSP_HY3'
);
wwv_flow_imp_shared.create_authentication(
 p_id=>wwv_flow_imp.id(28120928708491307752)
,p_name=>'Oracle APEX Accounts'
,p_scheme_type=>'NATIVE_APEX_ACCOUNTS'
,p_invalid_session_type=>'LOGIN'
,p_use_secure_cookie_yn=>'N'
,p_ras_mode=>0
,p_version_scn=>15617319818249
,p_created_on=>wwv_flow_imp.dz('20250410195745Z')
,p_updated_on=>wwv_flow_imp.dz('20250410195745Z')
,p_created_by=>'HIYAGUPTA385@GMAIL.COM'
,p_updated_by=>'HIYAGUPTA385@GMAIL.COM'
);
wwv_flow_imp.component_end;
end;
/
